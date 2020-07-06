class rainbowText extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      
      
      

      // Get the text of the host element this.innerHTML
      this._text = this.innerHTML
      // Split the string into an array of words text.split(' ')
      this._letters = this._text.split('')
      // Loop over each word in the array
       // Make a span 
      for (let i = 0; i < this._letters.length; i += 1) {
        const el = document.createElement('span')
        // Set the innerHTML of the span to the current word 
        el.innerHTML = this._letters[i] 
        this._shadowRoot.appendChild(el)
      const hue = 30 * i % 360
      el.style.color = `hsl(${hue}, 100%, 50%)`
    }
  }
}
customElements.define('rainbow-text', rainbowText);

  
  /*
  - Challenge - 1 - 
  All of the words in the 'rainbow-text' tag should each be a different
  color. To make this happen you'll need to get the text from the source
  tag, split into words, make a span for each word and style each of 
  these spans with a color. 
  Follow these steps: 
  - Get the text from the source tag with this.innerHTML
  - Split this into an array of words with split(' ')
  - Loop over the words
    - Make a span element 
    - Set the innerHTML to the word
    - Set the style to a color
    - Append the span to the shadowRoot
  To set the color you can use one of these methods. 
  Set the color with something like this: 
  const hue = 360 / words.length * i
  hsl(hue, 100%, 50%)
  */