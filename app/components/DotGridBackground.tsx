"use client";

import { useEffect, useRef } from "react";

export default function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLS = 28;
    const ROWS = 28;
    const HORIZON_FRAC = 0.0;
    const MOUSE_RADIUS = 140;
    const MOUSE_STRENGTH = 36;
    const WAVE_SPEED = 0.55;
    const WAVE_AMP = 10;
    const SCROLL_SPEED = 0.006; // depth cycles per second — dots flow toward the horizon

    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    // Projects a column and animated depth value to screen coordinates.
    // depth 0 = far (horizon), depth 1 = near (bottom of screen)
    function project(col: number, depth: number) {
      const t = depth * depth; // ease so near rows spread out faster

      const horizonY = height * HORIZON_FRAC;
      const nearY = height + 60;
      const y = horizonY + (nearY - horizonY) * depth;

      const cx = width / 2;
      const halfSpread = width * 0.58 * t;
      const x = cx + (col / (COLS - 1) - 0.5) * 2 * halfSpread;

      return { x, y, t };
    }

    let time = 0;

    function frame() {
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Animate each row's depth: subtract scrollT so rows drift toward the horizon,
      // wrapping back to near when they reach it (continuous loop).
      const scrollT = (time * SCROLL_SPEED) % 1;
      const rowEntries = Array.from({ length: ROWS }, (_, row) => {
        const rawDepth = row / ROWS;
        const depth = (((rawDepth - scrollT) % 1) + 1) % 1;
        return { row, depth };
      });

      // Sort far→near so far rows draw first (painter's algorithm)
      rowEntries.sort((a, b) => a.depth - b.depth);

      // Pre-compute screen positions for all grid points
      const positions: Array<Array<{ px: number; py: number; t: number }>> = [];
      for (const { row, depth } of rowEntries) {
        const rowPos: Array<{ px: number; py: number; t: number }> = [];
        for (let col = 0; col < COLS; col++) {
          const { x: bx, y: by, t } = project(col, depth);
          const wave =
            Math.sin(time * WAVE_SPEED + col * 0.35 + row * 0.55) *
            WAVE_AMP *
            t;

          const distX = bx - mx;
          const distY = by + wave - my;
          const dist = Math.sqrt(distX * distX + distY * distY);
          let px = bx;
          let py = by + wave;
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force =
              (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + t * 0.7);
            px += (distX / dist) * force;
            py += (distY / dist) * force;
          }
          rowPos.push({ px, py, t });
        }
        positions.push(rowPos);
      }

      // Draw grid lines (far→near)
      ctx.lineWidth = 0.4;
      for (let ri = 0; ri < rowEntries.length; ri++) {
        const rowPos = positions[ri];
        const { depth } = rowEntries[ri];
        const t = depth * depth;

        for (let col = 0; col < COLS; col++) {
          const { px, py } = rowPos[col];

          // Horizontal line to right neighbor
          if (col < COLS - 1) {
            const { px: rpx, py: rpy, t: rt } = rowPos[col + 1];
            const lineAlpha = ((t + rt) / 2) * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(rpx, rpy);
            ctx.stroke();
          }

          // Vertical line to next-farther row
          if (ri + 1 < rowEntries.length) {
            const nextRowPos = positions[ri + 1];
            const { depth: nextDepth } = rowEntries[ri + 1];
            const dt = nextDepth * nextDepth;
            // Skip the wrap-around connection (when depth jumps from ~0 back to ~1)
            if (Math.abs(nextDepth - depth) < 0.25) {
              const { px: dpx, py: dpy } = nextRowPos[col];
              const lineAlpha = ((t + dt) / 2) * 0.12;
              ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(dpx, dpy);
              ctx.stroke();
            }
          }
        }
      }

      // Draw dots on top of lines (far→near)
      for (let ri = 0; ri < rowEntries.length; ri++) {
        const rowPos = positions[ri];
        const { row, depth } = rowEntries[ri];

        for (let col = 0; col < COLS; col++) {
          const { t } = project(col, depth);
          const { x: bx, y: by } = project(col, depth);
          const wave =
            Math.sin(time * WAVE_SPEED + col * 0.35 + row * 0.55) *
            WAVE_AMP *
            t;

          const distX = bx - mx;
          const distY = by + wave - my;
          const dist = Math.sqrt(distX * distX + distY * distY);
          let { px, py } = rowPos[col];
          let brightBoost = 0;

          if (dist < MOUSE_RADIUS && dist > 0) {
            const force =
              (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + t * 0.7);
            px += (distX / dist) * force;
            py += (distY / dist) * force;
            brightBoost = (1 - dist / MOUSE_RADIUS) * 0.6;
          }

          const size = 1.0 + t * 2.8;
          const opacity = Math.min(1, 0.18 + t * 0.52 + brightBoost);

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
          ctx.fill();
        }
      }

      time += 0.016;
      animRef.current = requestAnimationFrame(frame);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, display: "block" }}
    />
  );
}
