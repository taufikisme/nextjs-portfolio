module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        extra: "8rem",
        "4xl": "5rem",
        t: {
          "4xl": "5rem",
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
        "size-100": "100% 100%",
        w100: "100% auto",
        h100: "auto 100%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
        "pos-110-200": "110% 200%",
        "pos-140-200": "140% 200%",
        "pos-card-blog": "108% 170%",
      },
      backgroundImage: {
        "round-b-light": "url('/images/lengkung-bawah.png')",
        "round-b-dark": "url('/images/lengkung-bawah-dark.png')",
        "blue-circle": "url('/images/bg-circle.png')",
        project1: "url('/images/project1.png')",
        project2: "url('/images/project2.png')",
      },
      colors: {
        light2: "#E3E9FF",
        dark2: "#101820",
        dark1: "#182430",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        green: "0 0 20px #3B83F6",
        "blue-neon": "0 0 15px #3B83F6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
