const homeInfo = {
	topTitleWord: 'Howdy',
	topSecTitleWord: 'friend!',
	secondaryTitle: '/Home',
	paragraph: 'Welcome to Hamsterwars! It is a spinoff of the WORLD FAMOUS "Kittenwar". But here you vote between 2 randomly picked hamsters and choose the one you find the cutiest! Below you can get a tour of the site. Enjoy!',
	primaryButton: 'site tour',
	secondaryButton: null
}

const tourInfo = [
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Meny',
		paragraph: 'In the top right corner you find the meny, the site navigation. There you find all the paths to your wishes, wheter you like to check out the hamster GALLERY or start a BATTLE',
		primaryButton: 'prev',
		secondaryButton: 'next'
	},
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Battle',
		paragraph: 'This is where the action happens! Start a game and choose the hamster you find the cutiest.',
		primaryButton: 'prev',
		secondaryButton: 'next'
	},
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Gallery',
		paragraph: 'Under the GALLERY you can see all the hamsters on the site and read about them. Here you also have the opportunity to add your very own hamster to the gallery. Read more about it in the Gallery.',
		primaryButton: 'prev',
		secondaryButton: 'next'
	}
]

const galleryInfo = {
	topTitleWord: 'Hamster',
	topSecTitleWord: 'gallery',
	secondaryTitle: '/Gallery',
	paragraph: 'Say "Hi" to all our cute hamsters, scroll away! If you like to read more about a specific one, just hover over the picture. Would you like to upload your own? just click the button below.',
	primaryButton: 'create hamster',
	secondaryButton: null
}

const createInfo = {
	topTitleWord: 'Create',
	topSecTitleWord: 'hamster',
	secondaryTitle: '/Create',
	paragraph: 'Welcome to create your own hamster and upload it to our database. You need to fill out "name" and "age", it is more fun if you write what he/ her loves and favorite food. Dont forget to add a picture.',
	primaryButton: 'back to gallery',
	secondaryButton: null
}

const battleInfo = {
	topTitleWord: 'Hamster',
	topSecTitleWord: 'Battle',
	secondaryTitle: '/Battle',
	paragraph: 'Welcome to the action! Start a match and choose your favorite. It is a tough choice? Hover over the picture and read more about the hamster. When you are done you will see each hamsters stats and start a new match.',
	primaryButton: null,
	secondaryButton: null
}

export {
	homeInfo,
	tourInfo,
	galleryInfo,
	createInfo,
	battleInfo
}