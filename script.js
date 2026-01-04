 const expData = [
    {
      title: "Brand Strategist",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolor, obcaecati aliquid dolorem doloremque accusantium accusamus temporibus aliquam odit suscipit!",
      img: "/digital-2.avif"
    },
    {
      title: "SEO Expert",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolor, obcaecati aliquid dolorem doloremque accusantium accusamus temporibus aliquam odit suscipit!",
      img: "/digital-2.avif"
    },
    {
      title: "Ad Campaign",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolor, obcaecati aliquid dolorem doloremque accusantium accusamus temporibus aliquam odit suscipit!",
      img: "/digital-4.avif"
    },
    {
      title: "Video Editing",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolor, obcaecati aliquid dolorem doloremque accusantium accusamus temporibus aliquam odit suscipit!",
      img: "/digital-2.avif"
    }
  ];

  function setchange(i) {
    document.getElem
    entById("expTitle").innerText = expData[i].title;
    document.getElementById("expText").innerText = expData[i].text;
    document.getElementById("expImage").src = expData[i].img;

    document.querySelectorAll(".experties").forEach(e=>e.classList.remove("active"));
    document.querySelectorAll(".experties")[i].classList.add("active")
  }
