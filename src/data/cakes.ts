import type { Cake } from "../types/cake";

export const cakes: Cake[] = [
  // ===== NUMBER CAKES (עוגות מספר מעוצבות) =====
  {
    id: 1,
    name: "עוגת מספר 18 - ורוד זהב",
    price: 320,
    image: "/src/assets/עוגת מספר 18.jpg",
    category: "number-cakes"
  },
  {
    id: 2,
    name: "עוגת מספר 13 - שוקולד פרימיום",
    price: 350,
    image: "/src/assets/עוגת מספר 13.jpg",
    category: "number-cakes"
  },
  // "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  {
    id: 3,
    name: "עוגת מספר 1 - יום הולדת שנה",
    price: 280,
    image: "/src/assets/עוגת מספר 1.jpg",
    category: "number-cakes"
  },
  // https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80
  {
    id: 4,
    name: "עוגת מספר 12 - לבת מצווה",
    price: 400,
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 13,
    name: "עוגת מספר 21 - רוק אנדי",
    price: 380,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 14,
    name: "עוגת מספר 30 - יובל מלכותי",
    price: 420,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 15,
    name: "עוגת מספר 7 - גיל השכל",
    price: 290,
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 16,
    name: "עוגת מספר 50 - זהב ורוד",
    price: 450,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 17,
    name: "עוגת מספר 16 - גלאם",
    price: 340,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 18,
    name: "עוגת מספר 40 - יוקרה",
    price: 400,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 19,
    name: "עוגת מספר 10 - יום הולדת שמח",
    price: 310,
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=800&q=80",
    category: "number-cakes"
  },
  {
    id: 20,
    name: "עוגת מספר 60 - חגיגה משפחתית",
    price: 460,
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&q=80",
    category: "number-cakes"
  },
  // ===== DESSERT CUPS (כוסיות קינוח לבר) =====
  {
    id: 5,
    name: "קינוח כוסיות גבינה ועוגיות",
    price: 180,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 6,
    name: "כוסיות קרם לוטוס",
    price: 160,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad5a?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 7,
    name: "כוסיות מוס שוקולד בלגי",
    price: 170,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 8,
    name: "כוסיות קרם ווניל עם תותים",
    price: 190,
    image: "/src/assets/קינוח תות.jpg",
    category: "dessert-cups"
  },
  {
    id: 21,
    name: "כוסיות טירמיסו איטלקי",
    price: 175,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 22,
    name: "כוסיות מוס שוקולד בכוסות",
    price: 165,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad5a?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 23,
    name: "כוסיות מוס פיסטוק",
    price: 185,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 24,
    name: "כוסיות קרם ברולה",
    price: 170,
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 25,
    name: "כוסיות עוגת גזר",
    price: 160,
    image: "https://images.unsplash.com/photo-1515037530-9a158f8f3522?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 26,
    name: "כוסיות צ'יזקייק אפוי",
    price: 180,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 27,
    name: "כוסיות מוס לימון",
    price: 155,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    category: "dessert-cups"
  },
  {
    id: 28,
    name: "כוסיות טירמיסו שכבות",
    price: 190,
    image: "https://images.unsplash.com/photo-1488477181946-6428a029177b?w=800&q=80",
    category: "dessert-cups"
  },

  // ===== CAKES (עוגות) =====
  {
    id: 9,
    name: "עוגת שכבות במילוי קרם שוקולד",
    price: 280,
    image: "/src/assets/עוגת שכבות שוקולד.PNG",
    category: "cakes"
  },
  {
    id: 10,
    name: "טרטל במילוי פיצוחים",
    price: 320,
    image: "/src/assets/טרטל פיצוחים.PNG",
    category: "cakes"
  },
  {
    id: 11,
    name: "גליליות גדולות במילוי קרם ווניל",
    price: 250,
    image: "/src/assets/גליליות.JPG",
    category: "cakes"
  },
  {
    id: 12,
    name: "עוגת לב פירות טריים",
    price: 290,
    image: "/src/assets/עוגת לב.JPG",
    category: "cakes"
  },
  {
    id: 29,
    name: "עוגת רד ולווט קלאסית",
    price: 300,
    image: "https://images.unsplash.com/photo-1586788680434-30d93b1d5a5e?w=800&q=80",
    category: "cakes"
  },
  {
    id: 30,
    name: "עוגת שוקולד מרובע שכבות",
    price: 330,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    category: "cakes"
  },
  {
    id: 31,
    name: "עוגת גבינה פירורים",
    price: 260,
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df26?w=800&q=80",
    category: "cakes"
  },
  {
    id: 32,
    name: "עוגת פירות טריים",
    price: 310,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    category: "cakes"
  },
  {
    id: 33,
    name: "עוגת שכבות קרמל מלוח",
    price: 340,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=80",
    category: "cakes"
  },
  {
    id: 34,
    name: "עוגת בראוניז שכבות",
    price: 290,
    image: "https://images.unsplash.com/photo-1602351447933-5cb7b61ba3fa?w=800&q=80",
    category: "cakes"
  },
  {
    id: 35,
    name: "עוגת תפוזים ושוקולד",
    price: 270,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "cakes"
  },
  {
    id: 36,
    name: "עוגת אגוזים ודבש",
    price: 320,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    category: "cakes"
  }
];

export const categories = {
  "number-cakes": {
    id: "number-cakes",
    name: "עוגות מספר מעוצבות",
    description: "עוגות בצורת מספרים לאירועים מיוחדים",
    color: "#ff6b9d"
  },
  "dessert-cups": {
    id: "dessert-cups",
    name: "כוסיות קינוח לבר",
    description: "קינוחים אישיים במגוון טעמים",
    color: "#c084fc"
  },
  "cakes": {
    id: "cakes",
    name: "עוגות",
    description: "עוגות שכבות קלאסיות ומודרניות",
    color: "#22d3ee"
  }
};