/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        movfateh: "#722ed1",
        primary: "#160637",
        bluegrad: "#e2f1ff",
      },
      fontSize: {
        buttonf: "17px",
      },
      spacing: {
        m2: "24px 16px 52px 0",
        w2: "168px",
        h2: "45px",
        p2: "14px 28px",
        shd2: "0 4px 6px 0 rgba(0,0,0,0,0.16)",
        marginPic: "68px 9px 0 72px",
        wPic: "535px",
        hPic: "419px",
      },
      borderRadius: {
        btn2: "24px",
      },
    },
  },
  plugins: [],
};
