/*
 * GET home page.
 */

exports.view = function(request, response){
  response.render('index', {
	'activities': [
		{
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=FRAEaBtP2r4&feature=emb_title",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=v7AYKMP6rOE&feature=emb_title",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 40,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=oBu-pQG6sTY&feature=emb_title",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 60,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=w0cLgFg4Zsw&feature=emb_title",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=4pKly2JojMw&feature=emb_title",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "exercise",
    "Activity": "Yoga",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=4vTJHUDB5ak&feature=emb_title",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "exercise",
    "Activity": "Biking",
    "minTime": 20,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/IE9PKXWpRGU/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "exercise",
    "Activity": "Jump rope",
    "minTime": 5,
    "Tags": "both",
    "Image": "https://source.unsplash.com/7QYd1VxLRbM/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "exercise",
    "Activity": "hula hoop",
    "minTime": 5,
    "Tags": "both",
    "Image": "https://source.unsplash.com/HC1I-tgIDq0/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "exercise",
    "Activity": "going for a walk",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/nVDB1IGq64s/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "exercise",
    "Activity": "going for a run",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/7DCZgKyp8vw/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "music",
    "Activity": "make a spotify playlist",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/3NgcTH0CFJg/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "music",
    "Activity": "learn a new piece of music with the intrument you play",
    "minTime": 20,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/bu-6kNWQj6U/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "music",
    "Activity": "listen to an album from an artist you've never heard of",
    "minTime": 20,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/tgmyo9lWll4/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "music",
    "Activity": "write a song",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/ddwbTn5HDdQ/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "music",
    "Activity": "look up your current mood on spotify and listen to that playlist",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/RNYB6v3XoE8/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "paint",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/QrYt4_K5TIc/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "creative",
    "Activity": "draw",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/eKkeKfDt1Vk/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "creative",
    "Activity": "color",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/ZsvuETrThX8/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "craft something for a friend",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/lJU5KvoHQHk/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "creative",
    "Activity": "decorate something for your room",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/4W5WWKaxsKs/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "creative",
    "Activity": "sidewalk chalk in your neighborhood or nearby park",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/StgZKNLVeJg/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "take a photograph of yourself and edit it",
    "minTime": 10,
    "Tags": "both",
    "Image": "https://source.unsplash.com/ZcOaFnQ8ACk/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "creative",
    "Activity": "make a graphic",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/ubIWo074QlU/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "creative",
    "Activity": "take a photograph of something in your house from a different point of view",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/9ryNj0e_XNY/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "do a puzzle",
    "minTime": 20,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/LuaT29bdjMA/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "creative",
    "Activity": "start a journal, or continue journalling",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/CKlHKtCJZKk/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "creative",
    "Activity": "write a poem",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/NUQtVifTqs4/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "write a song",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/ddwbTn5HDdQ/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "creative",
    "Activity": "write a letter to a penpal",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/U_DJOoSDhNo/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "creative",
    "Activity": "upcycle a piece of clothing",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/WgRj6Hc7yZw/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "creative",
    "Activity": "design a tattoo",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/77yU7LB7gBk/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "nature",
    "Activity": "plant a seed",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/4PG6wLlVag4/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "nature",
    "Activity": "go on a walk",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/nVDB1IGq64s/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "nature",
    "Activity": "go on a hike",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/Yizrl9N_eDA/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "nature",
    "Activity": "tend to your garden",
    "minTime": 20,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/sFydXGrt5OA/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "nature",
    "Activity": "read about a plant in your garden",
    "minTime": 10,
    "Tags": "outdoor",
    "Image": "https://source.unsplash.com/D9hyvnamCn0/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "learning",
    "Activity": "read a book that you've been meaning to read",
    "minTime": 40,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/4RNLzJzEMMs/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "learning",
    "Activity": "read an article about ____",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/dwbzzB03gUE/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "learning",
    "Activity": "listen to an audiobook",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/v0HbU2CNJFs/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "learning",
    "Activity": "listen to a podcast",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/UUPpu2sYV6E/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "learning",
    "Activity": "whats your favorite animal? read an article about them.",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/BuQ1RZckYW4/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "learning",
    "Activity": "read the first news article that pops up when you click the \"News\" tab on Google",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/aId-xYRTlEc/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "relaxation",
    "Activity": "yoga",
    "minTime": 30,
    "Tags": "both",
    "Image": "https://source.unsplash.com/dkg-zps94uw/1600x900",
    "Link": "https://www.youtube.com/watch?v=hJbRpHZr_d0&feature=emb_title",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "relaxation",
    "Activity": "meditate",
    "minTime": 20,
    "Tags": "both",
    "Image": "https://source.unsplash.com/NTyBbu66_SI/1600x900",
    "Link": "https://www.youtube.com/watch?v=rM_km4E3NYs",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "relaxation",
    "Activity": "meditate",
    "minTime": 10,
    "Tags": "both",
    "Image": "https://source.unsplash.com/NTyBbu66_SI/1600x900",
    "Link": "https://www.youtube.com/watch?v=6p_yaNFSYao",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "relaxation",
    "Activity": "meditate",
    "minTime": 5,
    "Tags": "both",
    "Image": "https://source.unsplash.com/NTyBbu66_SI/1600x900",
    "Link": "https://www.youtube.com/watch?v=i50ZAs7v9es",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "relaxation",
    "Activity": "meditate",
    "minTime": 15,
    "Tags": "both",
    "Image": "https://source.unsplash.com/NTyBbu66_SI/1600x900",
    "Link": "https://www.youtube.com/watch?v=p29mwfzpNc4",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "relaxation",
    "Activity": "do a face mask",
    "minTime": 10,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/AyqNM8D2aEI/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "relaxation",
    "Activity": "stretch",
    "minTime": 30,
    "Tags": "both",
    "Image": "https://source.unsplash.com/We6cFKHo8sQ/1600x900",
    "Link": "https://www.youtube.com/watch?v=qULTwquOuT4",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "relaxation",
    "Activity": "stretch",
    "minTime": 5,
    "Tags": "both",
    "Image": "https://source.unsplash.com/We6cFKHo8sQ/1600x900",
    "Link": "https://www.youtube.com/watch?v=pH6KMX0V7d0",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "kitchen fun",
    "Activity": "bake bread",
    "minTime": 60,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/ir3VHDcw-fY/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "kitchen fun",
    "Activity": "bake a cake",
    "minTime": 60,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/3K6qK5ZA_7w/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "kitchen fun",
    "Activity": "bake cupcakes",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/IVcI_J7ETLg/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "kitchen fun",
    "Activity": "make pasta from scratch",
    "minTime": 60,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/JG5tkvNqbZk/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "kitchen fun",
    "Activity": "make your favorite dish from your childhood",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/geG4C3qyiG0/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "kitchen fun",
    "Activity": "bake cookies",
    "minTime": 30,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/tDoHiqXl9b8/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "kitchen fun",
    "Activity": "recreate your favorite resturaunt meal",
    "minTime": 60,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/nj22gb3XKCM/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "productivity",
    "Activity": "clean/organize your bathroom",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/d0WU6KSp918/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "productivity",
    "Activity": "organize your closet",
    "minTime": 20,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/XjR-Y8PKeww/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "Category": "productivity",
    "Activity": "rotate your mattress",
    "minTime": 5,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/h_xf5vHZmRM/1600x900",
    "Link": "",
    "Description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "Category": "productivity",
    "Activity": "update your resume",
    "minTime": 15,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/7iSEHWsxPLw/1600x900",
    "Link": "",
    "Description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "Category": "productivity",
    "Activity": "make some personal finance goals, or check in with your past financial goals",
    "minTime": 20,
    "Tags": "indoor",
    "Image": "https://source.unsplash.com/IrRbSND5EUc/1600x900",
    "Link": "",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
	]
  });
};
