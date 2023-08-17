const HeaderLinks = [
  { id: 1, link: "Home", route: "/" },
  { id: 1, link: "About Us", route: "/about-us" },
  { id: 1, link: "Services", route: "/services" },
  { id: 1, link: "Gallery", route: "/gallery" },
  { id: 1, link: "Pages", route: "/pages" },
  { id: 1, link: "News", route: "/news" },
  { id: 1, link: "Contact Us", route: "/contact-us" },
];

const ImageList = ["image-1.jpg", "image-2.jpg", "image-3.jpg"];
const SlideHeader = [
  "Car Repair Service in your Local",
  "We Repair All Brands even Vintage cars",
  "The Best Car Engineering Company",
];
const SlideContent = [
  "So confident in our level of service that we back it up are we believe in providing top quality workmanship and So confident in our level of service that we back it up",
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dolorem, aliquam eveniet similique non vero vel fuga magnam aliquid iure. So confident in our level of service that we back it up",
  "consectetur adipisicing elit. Voluptas dolorem, aliquam eveniet similique non vero vel fuga magnam aliquid iure.service that we back it up. So confident in our level of service that we back it up",
];

const hero = document.getElementById("hero");
const header = document.getElementById("header");
const text = document.getElementById("text");

function ImageSlide() {
  const slide = [];
  let currentImageIndex = 0;

  for (let i = 0; i < ImageList.length; i++) {
    if (i < ImageList.length) {
      const interval = setInterval(() => {
        hero.style.backgroundImage = `url('../assets/${ImageList[currentImageIndex]}')`;
        header.innerText = `${SlideHeader[currentImageIndex]}`;
        text.innerText = `${SlideContent[currentImageIndex]}`;
        i++;
        currentImageIndex = (currentImageIndex + i) % ImageList.length;

        slide.push(interval[i]);
      }, 4000);
      // Storing interval IDs in the slide array
    } else {
      clearInterval(interval);
    }
  }
}

ImageSlide();
const div = document.getElementById("header_menu_container");
const ul = document.createElement("ul");

div.appendChild(ul);
ul.className = "header_menu";
HeaderLinks.map((item) => {
  const li = document.createElement("li");
  li.className = "header_menu_list";
  const a = document.createElement("a");
  a.classList = "header_menu_link";
  li.appendChild(a); //Apend a element to li element
  a.href = item.route;
  a.append(item.link);
  ul.appendChild(li); // Append li element to ul
});

// Custom Button
const defaultButton = document.getElementById('default-button');
const customButton = document.createElement('button');
customButton.className = 'custom_button';
customButton.textContent = 'View All Services';
customButton.addEventListener('click', () => {
  alert('Hello');
});
defaultButton.appendChild(customButton);

//Section 2
//----------------------Custom Header
const headerContainer = document.getElementById("custom_header");
const headerContainer2 = document.getElementById("custom_header2");
const headerDiv = document.createElement("div");

function createCustomHeader(header) {
  headerDiv.innerText = header;
  headerDiv.className = "main_custom_header";
  headerContainer.appendChild(headerDiv);
}
createCustomHeader("Welcome to our Workshop");
createCustomHeader("Welcome to our Workshop");

//------------------ Workshop List

const workShopList = [
  "Highly Professional Staff",
  "100% Satisfaction Guarantee",
  "Quality Control System",
  "Accourate Testing Process",
  "Unrivalle Workmanship",
  "Timely Delivery",
];
const listContainer = document.getElementById("workshop_list");
const listUl = document.createElement("ul");
listUl.className = "workshop_list_container";
listContainer.appendChild(listUl);
function handleCreateList() {
  for (let i = 0; i < workShopList.length; i++) {
    const listLi = document.createElement("li");
    listLi.innerText = workShopList[i];
    listUl.appendChild(listLi);
  }
}
handleCreateList();

//-------- Our service card

const serviceCard = [
  {
    id: 100,
    header: "Performance Upgrade",
    image: "bg-18.jpg",
  },
  {
    id: 101,
    header: "Break Repair & Service",
    image: "bg-19.jpg",
  },
  {
    id: 102,
    header: "Transmission Services",
    image: "bg-13-1.jpg",
  },
  {
    id: 103,
    header: "Tyre & Wheels",
    image: "bg-2.jpg",
  },

  {
    id: 104,
    header: "Denting & Painting",
    image: "image-14-2.jpg",
  },
  {
    id: 105,
    header: "Engine Service & Repair",
    image: "bg-1.jpg",
  },
];

const card = document.getElementById("card");

//Map out the Service Card Content

serviceCard.map((item) => {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  const title = document.createElement("p");
  const a = document.createElement("a");
  const header = document.createElement("p");
  title.className = "card_title";
  header.className = "card_header";
  title.innerText = "SERVICE AND REPAIRS";
  a.href = "#";
  a.innerText = "Read More";
  header.innerText = item.header;
  cardContainer.setAttribute[("key", item.id)];
  cardContainer.appendChild(title);
  cardContainer.appendChild(header);
  cardContainer.appendChild(a);
  card.appendChild(cardContainer);

  cardContainer.classList.add("hover");
  const handleMouseEnter = (index) => {
    cardContainer.style.backgroundImage = `url("../assets/${item.image}")`
    cardContainer.style.backgroundSize = "cover"
    cardContainer.style.transition = "all .2s ease-in-out"
    cardContainer.style.position = "center"
    header.style.color = "#fff"
    title.style.color = "#f1f1f1"
  };
  const handleMouseLeave = (index) => {
    cardContainer.style.background = "white"
    header.style.color = "#000"
    title.style.color = "#8a8a8a"
  };
  cardContainer.addEventListener("mouseenter", handleMouseEnter);
  cardContainer.addEventListener("mouseleave", handleMouseLeave)
});

//Why choose Us

const WhyChooseUs = [
  "Certified Expert Mechanics",
  "Fast And Quality Service",
  "Best Prices in Town",
  "Awarded Workshop"
]
const AdditionalList = [
  "General Auto Repair & Maintenance",
  "Transmission Repair & Replacement",
  "Tire Repair and Replacement",
  "Break Job / Break Services",
  "Electrical Diagnostics",
  "Fuel System Repairs",
  "Starting and Charging Repair",
  "Steering and Suspension Work",
  "Emission Repair Facility",
  "Wheel Alignment",
  "Computer Diagaonstic Testing",
  "Fuel System Repair",
  "Exhaust System Repair",
]
const mainContainer = document.getElementById("choose")
mainContainer.style.background = `url("../assets/bg-1.jpg")`
mainContainer.style.backgroundRepeat = "no-repeat"

const tab = document.getElementById("link-tab")
const tab1 = document.createElement("div")
const tab2 = document.createElement("div")
tab.appendChild(tab1)
tab.appendChild(tab2)

tab1.innerHTML = "Why Choose Us"
tab1.className = "tab-1"
tab2.className = "tab-1"
// tab2.innerHTML = "Additional Services"

const chooseContainer = document.getElementById("choose-us")
const chooseImage = document.createElement("img")
chooseImage.src = "../assets/image-105.jpg"
chooseImage.alt = "choose-img"
const chooseLeft = document.createElement("div")
const chooseRight = document.createElement("div")
chooseLeft.className = "choose_left"
chooseRight.className = "choose_right"
chooseContainer.appendChild(chooseLeft)
chooseContainer.appendChild(chooseRight)
chooseLeft.appendChild(chooseImage)

//text
const chooseText = document.createElement("h3")
chooseText.innerText = "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
chooseRight.appendChild(chooseText)

const chooseList = document.createElement("div")
const ListUl = document.createElement("ul")
for(let i = 0; i < WhyChooseUs.length; i++){
const chooseLi  = document.createElement("li")
chooseLi.innerText = WhyChooseUs[i]
ListUl.appendChild(chooseLi)
chooseList.appendChild(ListUl)
chooseRight.appendChild(chooseList)
}


function Additional(){
  const additionalContainer = document.getElementById("additional")
  const additionalImage = document.createElement("img")
  additionalImage.src = "../assets/image-4.jpg"
  additionalImage.alt = "additional-img"
  const additionalLeft = document.createElement("div")
  const additionalRight = document.createElement("div")
  additionalLeft.className = "additional_left"
  additionalRight.className = "additional_right"
  additionalContainer.appendChild(additionalLeft)
  additionalContainer.appendChild(additionalRight)
  additionalLeft.appendChild(additionalImage)
  const chooseList = document.createElement("div")
  const ListUl = document.createElement("ul")
  for(let i = 0; i < AdditionalList.length; i++){
  const chooseLi  = document.createElement("li")
  chooseLi.innerText = AdditionalList[i]
  ListUl.appendChild(chooseLi)
  chooseList.appendChild(ListUl)
  additionalRight.appendChild(chooseList)
  }
}
const isSelected = false
function tabSelector(){
  isSelected === true ? ChooseUs() : Additional()
}
const handleClick = () =>{
  isSelected = true
}
// tab1.addEventListener("click", handleClick)


tab2.addEventListener('click', () => {
  chooseUsContainer.style.display = 'none';
  additionalContainer.style.display = 'block';
});
tab1.addEventListener('click', () => {
  chooseUsContainer.style.display = 'none';
  additionalContainer.style.display = 'block';
});


const FooterLinks = {
  useful:[
    {id: 1, link: "Home", route:'/'},
    {id: 12, link: "About Us", route:'/'},
    {id: 13, link: "Our Team", route:'/'},
    {id: 14, link: "Testimonials", route:'/'},
    {id: 15, link: "Contact Us", route:'/'},
  ],
  services:[
    {id: 1, link: "Performance Upgrade", route:'/'},
    {id: 12, link: "Transmission Services", route:'/'},
    {id: 13, link: "Break Repair & Service", route:'/'},
    {id: 14, link: "Engine Service & Repair", route:'/'},
    {id: 15, link: "Tyre & Wheels", route:'/'},
  ],
  contact:[
    {id: 1, link: "Call us on :+1800-456-7890", route:'/'},
    {id: 12, link: "Email us :info@example.com", route:'/'},
  ],
}

const footer = document.getElementById("footerLink")
const useful = document.getElementById("useful")
const service = document.getElementById("service")
const contact = document.getElementById("contact")
const footerUl = document.createElement("ul")
const footerUl2 = document.createElement("ul")
const footerUl3 = document.createElement("ul")
footer.appendChild(useful)
footer.appendChild(service)
footer.appendChild(contact)
FooterLinks.useful.map((item) => {
  const footerLi = document.createElement("li")
  footerLi.innerText = item.link
  footerUl.appendChild(footerLi)
  useful.appendChild(footerUl)
})
FooterLinks.services.map((item) => {
  const footerLi = document.createElement("li")
  footerLi.innerText = item.link
  footerUl2.appendChild(footerLi)
  service.appendChild(footerUl2)
})
FooterLinks.contact.map((item) => {
  const footerLi = document.createElement("li")
  footerLi.innerText = item.link
  footerUl3.appendChild(footerLi)
  contact.appendChild(footerUl3)
})
