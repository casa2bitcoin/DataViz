var myConfig = {
  type: "wordcloud",
  options: {
    text:
      "Elon Elon Oksman Oksman King King Szabo Szabo Szabo Satoshi Satoshi Charles Charles Marti Marti Bill Bill Graig Clear Clear Nick Nick Nick Neal Neal Shinichi Shinichi  Steven Mallmi Mallmi Michael Michael Hal Steven NSA NSA Bry Bry Gates Gates Filmey Nakamoto Nakamoto Nakamoto Wright Musk Musk Vladimir Vladimir Mochizuki Mochizuki Dorian Dorian Elon Elon Oksman Oksman King King Szabo Szabo Szabo Satoshi Satoshi Charles Charles Marti Marti Bill Bill Graig Clear Clear Nick Nick Nick Neal Neal Shinichi Shinichi  Steven Mallmi Mallmi Michael Michael Hal Steven NSA NSA Bry Bry Gates Gates Filmey Nakamoto Nakamoto Nakamoto Wright Musk Musk Vladimir Vladimir Mochizuki Mochizuki Dorian Dorian Elon Elon Oksman Oksman King King Szabo Szabo Szabo Satoshi Satoshi Charles Charles Marti Marti Bill Bill Graig Clear Clear Nick Nick Nick Neal Neal Shinichi Shinichi  Steven Mallmi Mallmi Michael Michael Hal Steven NSA NSA Bry Bry Gates Gates Filmey Nakamoto Nakamoto Nakamoto Wright Musk Musk Vladimir Vladimir Mochizuki Mochizuki Dorian Dorian Elon Elon Oksman Oksman King King Szabo Szabo Szabo Satoshi Satoshi Charles Charles Marti Marti Bill Bill Graig Clear Clear Nick Nick Nick Neal Neal Shinichi Shinichi  Steven Mallmi Mallmi Michael Michael Hal Steven NSA NSA Bry Bry Gates Gates Filmey Nakamoto Nakamoto Nakamoto Wright Musk Musk Vladimir Vladimir Mochizuki Mochizuki Dorian Dorian",
    minLength: 1,
    ignore: [
      "America",
      "American",
      "Applause",
      "Because",
      "because",
      "could",
      "don’t",
      "people",
      "That’s",
      "that’s",
      "Their",
      "their",
      "there",
      "these",
      "thing",
      "those",
      "through",
      "We’re",
      "we’re",
      "where",
      "would"
    ],
    maxItems: 40,
    aspect: "spiral",
    rotate: false,
    colorType: "palette",
    palette: [
      "#D32F2F",
      "#5D4037",
      "#a83d2f",
      "#E53935",
      "#6D4C41",
      "#3a2927",
      "#F44336",
      "#795548",
      "#281412",
      "#EF5350",
      "#8D6E63",
      "#140502"
    ],

    style: {
      fontFamily: "Crete Round",

      hoverState: {
        borderRadius: 2
      },
      tooltip: {
        text: "%text: %hits",
        visible: true,

        alpha: 0.9,
        borderRadius: 2,
        borderColor: "none",
        fontFamily: "Georgia",
        textAlpha: 1
      }
    }
  },

};

zingchart.render({
  id: "myChart",
  data: myConfig,
  height: 300,
  width: 800
});
