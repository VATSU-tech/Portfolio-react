/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "hsl(var(--ink))",
        "ink-muted": "hsl(var(--ink-muted))",
        night: "hsl(var(--night))",
        "night-2": "hsl(var(--night-2))",
        accent: "hsl(var(--accent))",
        "accent-2": "hsl(var(--accent-2))",
        "accent-3": "hsl(var(--accent-3))",
        glow: "hsl(var(--glow))",
        stroke: "hsl(var(--stroke))"
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"IBM Plex Sans\"", "sans-serif"]
      },
      boxShadow: {
        "glow": "0 0 30px hsl(var(--glow) / 0.4)",
        "glow-strong": "0 0 60px hsl(var(--glow) / 0.45)",
        "depth": "0 20px 60px -35px hsl(var(--glow) / 0.6)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseOrb: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -16px, 0) scale(1.05)" }
        },
        tilt: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(6deg) rotateY(-8deg)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)" }
        },
        reveal: {
          "0%": { opacity: 0, transform: "translate3d(0, 30px, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-orb": "pulseOrb 8s ease-in-out infinite",
        tilt: "tilt 10s ease-in-out infinite",
        reveal: "reveal 0.8s ease-out both"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
};
