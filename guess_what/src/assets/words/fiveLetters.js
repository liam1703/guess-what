const fiveLetterWord = [
  "Abuse",
  "Adult",
  "Agent",
  "Anger",
  "Apple",
  "Award",
  "Basis",
  "Beach",
  "later",
  "Birth",
  "Block",
  "Blood",
  "Board",
  "Brain",
  "Bread",
  "Break",
  "Brown",
  "Buyer",
  "Cause",
  "Chain",
  "Chair",
  "Chest",
  "Chief",
  "Child",
  "China",
  "Claim",
  "Class",
  "Clock",
  "Coach",
  "Coast",
  "Court",
  "Cover",
  "Cream",
  "Crime",
  "Cross",
  "Crowd",
  "Crown",
  "Cycle",
  "Dance",
  "Death",
  "Depth",
  "Doubt",
  "Draft",
  "Drama",
  "Dream",
  "Dress",
  "Drink",
  "Drive",
  "Earth",
  "Enemy",
  "Entry",
  "Error",
  "Event",
  "Faith",
  "Fault",
  "Field",
  "Fight",
  "Final",
  "Floor",
  "Focus",
  "Force",
  "Frame",
  "Front",
  "Heart",
  "Fruit",
  "Glass",
  "Grant",
  "Grass",
  "Green",
  "Group",
  "Guide",
  "Horse",
  "Hotel",
  "House",
  "Image",
  "Index",
  "Input",
  "Issue",
  "Judge",
  "Knife",
  "Layer",
  "Level",
  "Light",
  "Limit",
  "Lunch",
  "Major",
  "March",
  "Match",
  "Metal",
  "Model",
  "Money",
  "Month",
  "Motor",
  "Mouth",
  "Music",
  "Night",
  "Noise",
  "North",
  "Novel",
  "Nurse",
  "Offer",
  "Order",
  "Other",
  "Owner",
  "Panel",
  "Paper",
  "Party",
  "Peace",
  "Peter",
  "Phase",
  "Phone",
  "Piece",
  "Pilot",
  "Pitch",
  "Place",
  "Plane",
  "Plant",
  "Plate",
  "Point",
  "Pound",
  "Power",
  "Press",
  "Price",
  "Pride",
  "Prize",
  "Proof",
  "Queen",
  "Radio",
  "Range",
  "Ratio",
  "Reply",
  "Right",
  "River",
  "Rugby",
  "Scale",
  "Scene",
  "Scope",
  "Score",
  "Sense",
  "Shape",
  "Share",
  "Sheep",
  "Sheet",
  "Shift",
  "Shirt",
  "Shock",
  "Sight",
  "Skill",
  "Sleep",
  "Smile",
  "Smoke",
  "Sound",
  "South",
  "Space",
  "Speed",
  "Spite",
  "Sport",
  "Squad",
  "Staff",
  "Stage",
  "State",
  "Steam",
  "Steel",
  "Stock",
  "Stone",
  "Store",
  "Study",
  "Stuff",
  "Style",
  "Sugar",
  "Table",
  "Taste",
  "Thing",
  "Title",
  "Total",
  "Touch",
  "Tower",
  "Track",
  "Trade",
  "Train",
  "Trend",
  "Trial",
  "Trust",
  "Truth",
  "Truth",
  "Union",
  "Unity",
  "Value",
  "Video",
  "Visit",
  "Voice",
  "Water",
  "White",
  "Whole",
  "World",
  "Youth",
  "There",
  "Where",
  "Which",
  "Whose",
  "Yours",
  "Admit",
  "Adopt",
  "Agree",
  "Allow",
  "Alter",
  "Apply",
  "Argue",
  "Arise",
  "Avoid",
  "Begin",
  "Blame",
  "Break",
  "Bring",
  "Build",
  "Burst",
  "Carry",
  "Catch",
  "Cause",
  "Check",
  "Claim",
  "Clean",
  "Climb",
  "Climb",
  "Count",
  "Cover",
  "Cross",
  "Doubt",
  "Drink",
  "Drive",
  "Enjoy",
  "Enter",
  "Exist",
  "Fight",
  "Focus",
  "Force",
  "Guess",
  "Issue",
  "Judge",
  "Laugh",
  "Leave",
  "Limit",
  "Match",
  "Occur",
  "Prove",
  "Raise",
  "Reach",
  "Refer",
  "Relax",
  "Serve",
  "Shall",
  "Shoot",
  "Solve",
  "Speak",
  "Spend",
  "Split",
  "Stand",
  "Start",
  "Stick",
  "Teach",
  "Think",
  "Thank",
  "Throw",
  "Treat",
  "Waste",
  "Watch",
  "Worry",
  "Would",
  "Write",
  "Acute",
  "Alive",
  "Alone",
  "Angry",
  "Aware",
  "Basic",
  "Blind",
  "Brave",
  "Brief",
  "Broad",
  "Civil",
  "Clear",
  "Close",
  "Crazy",
  "Empty",
  "Equal",
  "Exact",
  "Faint",
  "Fifth",
  "Giant",
  "Grand",
  "Green",
  "Gross",
  "Harsh",
  "Human",
  "Ideal",
  "Inner",
  "Joint",
  "Large",
  "Legal",
  "Local",
  "Loose",
  "Lucky",
  "Magic",
  "Minor",
  "Moral",
  "Naked",
  "Nasty",
  "Naval",
  "Outer",
  "Prime",
  "Proud",
  "Quiet",
  "Ready",
  "Roman",
  "Rough",
  "Royal",
  "Rural",
  "Sharp",
  "Sheer",
  "Small",
  "Smart",
  "Solid",
  "Sorry",
  "Spare",
  "Steep",
  "Still",
  "Super",
  "Sweet",
  "Third",
  "Tough",
  "Upper",
  "Upset",
  "Urban",
  "Usual",
  "Vague",
  "Valid",
  "Vital",
  "White",
  "Young",
  "Slash",
  "While",
  "Above",
  "Again",
  "Ahead",
  "Aloud",
  "Apart",
  "Aptly",
  "Aside",
  "Awful",
  "Badly",
  "Below",
  "Cheap",
  "Daily",
  "Dirty",
  "Dryly",
  "Early",
  "Extra",
  "False",
  "First",
  "Forth",
  "Fully",
  "Funny",
  "Godly",
  "Great",
  "Heavy",
  "Hotly",
  "Jolly",
  "Light",
  "Madly",
  "Maybe",
  "Never",
  "Newly",
  "Nobly",
  "Oddly",
  "Often",
  "Piano",
  "Plain",
  "Plumb",
  "Prior",
  "Quick",
  "Rapid",
  "Sadly",
  "Short",
  "Silly",
  "Sleek",
  "Still",
  "Stour",
  "Thick",
  "Tight",
  "Today",
  "Truly",
  "Twice",
  "Wrong",
  "About",
  "Adown",
  "Afore",
  "After",
  "Along",
  "Among",
  "Round",
  "Since",
  "Under",
  "Until",
  "Bless",
  "Bravo",
  "Fudge",
  "Havoc",
  "Hello",
  "Marry",
  "Mercy",
  "Quite",
  "audio",
  "tweet",
];

export default function getRandomWord() {
  const randomIndex = Math.round(Math.random() * fiveLetterWord.length);
  return fiveLetterWord[randomIndex];
}
