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
    const ROWS = 22;
    const HORIZON_FRAC = 0.38;
    const MOUSE_RADIUS = 140;
    const MOUSE_STRENGTH = 36;
    const WAVE_SPEED = 0.55;
    const WAVE_AMP = 10;

    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    // Returns projected (x, y) and depth for a grid point
    function project(col: number, row: number) {
      // depth 0 = far (horizon), 1 = near (bottom of screen)
      const depth = row / (ROWS - 1);
      const t = depth * depth; // ease so near rows spread out faster

      const horizonY = height * HORIZON_FRAC;
      const nearY = height + 60;
      const y = horizonY + (nearY - horizonY) * depth;

      const cx = width / 2;
      const halfSpread = width * 0.58 * t;
      const x = cx + ((col / (COLS - 1)) - 0.5) * 2 * halfSpread;

      return { x, y, depth, t };
    }

    let time = 0;

    function frame() {
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw subtle grid lines between adjacent dots first (behind dots)
      ctx.lineWidth = 0.4;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const { x: bx, y: by, t } = project(col, row);
          const wave = Math.sin(time * WAVE_SPEED + col * 0.35 + row * 0.55) * WAVE_AMP * t;

          // Apply mouse repulsion
          const distX = bx - mx;
          const distY = (by + wave) - my;
          const dist = Math.sqrt(distX * distX + distY * distY);
          let px = bx;
          let py = by + wave;
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + t * 0.7);
            px += (distX / dist) * force;
            py += (distY / dist) * force;
          }

          // Horizontal line to right neighbor
          if (col < COLS - 1) {
            const { x: rx, y: ry, t: rt } = project(col + 1, row);
            const rwave = Math.sin(time * WAVE_SPEED + (col + 1) * 0.35 + row * 0.55) * WAVE_AMP * rt;
            let rpx = rx;
            let rpy = ry + rwave;
            const rdistX = rx - mx;
            const rdistY = rpy - my;
            const rdist = Math.sqrt(rdistX * rdistX + rdistY * rdistY);
            if (rdist < MOUSE_RADIUS && rdist > 0) {
              const force = (1 - rdist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + rt * 0.7);
              rpx += (rdistX / rdist) * force;
              rpy += (rdistY / rdist) * force;
            }
            const lineAlpha = (t + rt) / 2 * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(rpx, rpy);
            ctx.stroke();
          }

          // Vertical line to row below neighbor
          if (row < ROWS - 1) {
            const { x: dx, y: dy, t: dt } = project(col, row + 1);
            const dwave = Math.sin(time * WAVE_SPEED + col * 0.35 + (row + 1) * 0.55) * WAVE_AMP * dt;
            let dpx = dx;
            let dpy = dy + dwave;
            const ddistX = dx - mx;
            const ddistY = dpy - my;
            const ddist = Math.sqrt(ddistX * ddistX + ddistY * ddistY);
            if (ddist < MOUSE_RADIUS && ddist > 0) {
              const force = (1 - ddist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + dt * 0.7);
              dpx += (ddistX / ddist) * force;
              dpy += (ddistY / ddist) * force;
            }
            const lineAlpha = (t + dt) / 2 * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(dpx, dpy);
            ctx.stroke();
          }
        }
      }

      // Draw dots on top of lines
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const { x: bx, y: by, t } = project(col, row);
          const wave = Math.sin(time * WAVE_SPEED + col * 0.35 + row * 0.55) * WAVE_AMP * t;

          const distX = bx - mx;
          const distY = (by + wave) - my;
          const dist = Math.sqrt(distX * distX + distY * distY);
          let px = bx;
          let py = by + wave;
          let brightBoost = 0;

          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH * (0.3 + t * 0.7);
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
