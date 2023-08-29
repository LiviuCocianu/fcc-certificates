// In seconds
const loopDelay = 10

var index = 0
var elementToChange = "body"

const urls = [
	"url('https://images7.alphacoders.com/536/thumb-1920-536426.png')",
	"url('https://images.alphacoders.com/880/thumb-1920-880723.jpg')",
	"url('https://images8.alphacoders.com/736/thumb-1920-736302.png')",
	"url('https://images.alphacoders.com/285/thumb-1920-285391.jpg')",
	"url('https://images4.alphacoders.com/149/thumb-1920-149156.jpg')",
	"url('https://images.alphacoders.com/106/thumb-1920-1067995.jpg')",
	"url('https://images4.alphacoders.com/553/thumb-1920-553496.jpg')",
	"url('https://images6.alphacoders.com/886/thumb-1920-886166.jpg')",
	"url('https://images5.alphacoders.com/439/thumb-1920-439638.jpg')"
]

if (screen.width <= 800) {
	$("#mobile-banner").css({ "display": "block" })
	elementToChange = "#mobile-banner"
}

setInterval(() => {
	$(elementToChange).css({ "background-image": urls[index] })
	index = index === urls.length - 1 ? 0 : index + 1
}, loopDelay * 1000)