.container {
    background-color: rgb(0, 0, 0);
    width: 100vw;
    display: flex;
    background-image: url(../../files/home-bg.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    font-family: "Montserrat", sans-serif;
    justify-content: space-between;
  }
  
  .main_navbar {
    grid-column: 1 / -1;
    padding-top: 2vh;
    background-color: black;
    height: 4.5vw;
  }
  
  .nav_links {
    list-style: none;
    padding-bottom: 3vh;
  }
  
  .nav_links_li {
    display: inline-block;
    font-size: 2rem;
    padding: 0rem 1rem;
    letter-spacing: 1px;
    transition: 0.3s ease;
    list-style: none;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.842);
    cursor: pointer;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
  
  .nav_links_li:hover {
    color: rgb(97, 148, 214);
  }
  
  .card_container {
    margin-top: 3rem;
    padding: 2vw 5vw 4vw 5vw;
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 0.5vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  
  @media only screen and (max-width: 600px) {
    .card_Container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .small_card {
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    border: 4px black solid;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  
  .small_card:hover {
    background-color: rgb(255, 255, 255);
    transition: ease 200ms;
  }
  
  .small_card_img {
    transition: 0.5s;
    padding-top: 2rem;
    width: 100%;
    height: 100%;
  }
  
  .small_card_title {
    background-image: linear-gradient(
      to bottom,
      rgba(8, 8, 8, 0.582),
      transparent
    );
    padding: 1.1rem;
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    width: 100%;
    left: 0%;
  }
  .big_card {
    color: white;
    height: auto;
    background-color: rgba(0, 0, 0, 0.781);
    animation: big_card_show 1.5s ease forwards;
    padding: 1vw 3vw 1vw 1vw;
    border-left: 5px solid white;
  }
  
  .big_card_span {
    font-size: 2.2rem;
    font-weight: 600;
  }
  
  .big_card_description {
    font-size: 1.4rem;
    margin-left: 1.2rem;
    line-height: 2rem;
  }
  
  .big_card_img {
    margin-top: -2rem;
    width: 25vw;
    padding-bottom: 3vw;
    justify-self: center;
  }
  
  .big_card_description_div {
    text-align: left;
  }
  
  .big_card_target {
    padding-bottom: 2rem;
    padding-left: 1.2rem;
  }
  
  .overlay {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: -15rem;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(8, 8, 8, 0.582)
    );
    padding: 5px 5px 5px;
    transition: 0.6s ease-in-out 200ms;
  }
  
  .btn {
    display: inline-block;
    margin-bottom: 2vh;
    padding: 0.6rem 0.9rem;
    background-color: rgb(97, 148, 214);
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: 0.3s ease;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  
  .img_container {
    height: -webkit-fill-available;
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .img_container:hover .overlay {
    bottom: -10px;
    transition: 0.7s ease 0.1s;
  }
  
  @keyframes big_card_show {
    from {
      transform: translateX(200%);
      width: 0vw;
    }
    to {
      transform: translateX(0%);
  
      width: 40vw;
    }
  }
  
  @media only screen and (max-width: 600px) {
    .card_container {
      padding: 0vw;
      max-width: 100%;
      height: min-content;
      display: grid;
      grid-gap: 0.2vw;
      grid-template-columns: 1fr 1fr 1fr;
    }
  
    .small_card {
      background-color: rgba(255, 255, 255, 0);
      flex-direction: column;
      color: white;
      font-size: 0.9rem;
      border: 2px black solid;
      border-bottom-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  
    .small_card:hover {
      background-color: rgba(255, 255, 255, 0.089);
      transition: ease 200ms;
    }
  
    .small_card_img {
      transition: 0.5s;
      padding-top: 1rem;
      width: 100%;
      height: 100%;
    }
  
    .small_card_title {
      padding: 0.5rem 0.1rem 0.5rem 0.1rem;
      font-size: 0.6rem;
      font-weight: 500;
      position: absolute;
      width: 100%;
      left: 0%;
    }
    .big_card {
      color: white;
      height: auto;
      background-color: rgba(0, 0, 0, 0.781);
      animation: big_card_show 1.5s ease forwards;
      padding: 1vw 3vw 1vw 1vw;
      border-left: 2px solid rgba(255, 255, 255, 0.424);
    }
  
    .big_card_span {
      font-size: 1rem;
      font-weight: 600;
    }
  
    .big_card_description {
      font-size: 0.9rem;
      margin-left: 1.2rem;
      line-height: 2rem;
    }
  
    .big_card_img {
      margin-top: -2rem;
      width: 100%;
      padding-bottom: 3vw;
      justify-self: center;
    }
  
    .big_card_description_div {
      text-align: left;
    }
  
    .big_card_target {
      padding-bottom: 2rem;
      padding-left: 1.2rem;
    }
  
    .overlay {
      position: absolute;
      width: 100%;
      left: 0px;
      bottom: -15rem;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(8, 8, 8, 0.582)
      );
      padding: 5px 5px 5px;
      transition: 0.6s ease-in-out 200ms;
    }
  
    .btn {
      display: inline-block;
      margin-bottom: 2vh;
      padding: 0.6rem 0.9rem;
      background-color: rgb(97, 148, 214);
      border: none;
      border-radius: 25px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 0.3s ease;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }
  
    .img_container {
      height: -webkit-fill-available;
      overflow: hidden;
      width: 100%;
      position: relative;
    }
  
    .img_container:hover .overlay {
      bottom: -10px;
      transition: 0.7s ease 0.1s;
    }
  
    @keyframes big_card_show {
      from {
        transform: translateX(200%);
        width: 0vw;
      }
      to {
        transform: translateX(0%);
  
        width: 40vw;
      }
    }
  
    .container {
      background-color: rgb(0, 0, 0);
      width: 100vw;
      display: flex;
      background-image: url(../../files/home-bg.png);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      font-family: "Montserrat", sans-serif;
      justify-content: space-between;
    }
  
    .main_navbar {
      grid-column: 1 / -1;
      padding-top: 2vh;
      background-color: black;
      height: 4.5vw;
    }
  
    .nav_links {
      list-style: none;
      padding-bottom: 3vh;
    }
  
    .nav_links_li {
      display: inline-block;
      font-size: 2rem;
      padding: 0rem 1rem;
      letter-spacing: 1px;
      transition: 0.3s ease;
      list-style: none;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.842);
      cursor: pointer;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  
    .nav_links_li:hover {
      color: rgb(97, 148, 214);
    }
  
    .card_container {
      margin-top: 3rem;
      padding: 2vw 5vw 4vw 5vw;
      width: 100%;
      height: auto;
      display: grid;
      grid-gap: 0.5vw;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  
    @media only screen and (max-width: 600px) {
      .card_Container {
        grid-template-columns: 1fr 1fr;
      }
    }
  
    .small_card {
      background-color: rgb(255, 255, 255);
      flex-direction: column;
      border: 4px black solid;
      border-bottom-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  
    .small_card:hover {
      background-color: rgb(255, 255, 255);
      transition: ease 200ms;
    }
  
    .small_card_img {
      transition: 0.5s;
      padding-top: 2rem;
      width: 100%;
      height: 100%;
    }
  
    .small_card_title {
      background-image: linear-gradient(
        to bottom,
        rgba(8, 8, 8, 0.582),
        transparent
      );
      padding: 1.1rem;
      font-size: 1rem;
      font-weight: 600;
      position: absolute;
      width: 100%;
      left: 0%;
    }
    .big_card {
      color: white;
      height: auto;
      background-color: rgba(0, 0, 0, 0.781);
      animation: big_card_show 1.5s ease forwards;
      padding: 1vw 3vw 1vw 1vw;
      border-left: 5px solid white;
    }
  
    .big_card_span {
      font-size: 2.2rem;
      font-weight: 600;
    }
  
    .big_card_description {
      font-size: 1.4rem;
      margin-left: 1.2rem;
      line-height: 2rem;
    }
  
    .big_card_img {
      margin-top: -2rem;
      width: 25vw;
      padding-bottom: 3vw;
      justify-self: center;
    }
  
    .big_card_description_div {
      text-align: left;
    }
  
    .big_card_target {
      padding-bottom: 2rem;
      padding-left: 1.2rem;
    }
  
    .overlay {
      position: absolute;
      width: 100%;
      left: 0px;
      bottom: -15rem;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(8, 8, 8, 0.582)
      );
      padding: 5px 5px 5px;
      transition: 0.6s ease-in-out 200ms;
    }
  
    .btn {
      display: inline-block;
      margin-bottom: 2vh;
      padding: 0.6rem 0.9rem;
      background-color: rgb(97, 148, 214);
      border: none;
      border-radius: 25px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 0.3s ease;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }
  
    .img_container {
      height: -webkit-fill-available;
      overflow: hidden;
      width: 100%;
      position: relative;
    }
  
    .img_container:hover .overlay {
      bottom: -10px;
      transition: 0.7s ease 0.1s;
    }
  
    @keyframes big_card_show {
      from {
        transform: translateX(200%);
        width: 0vw;
      }
      to {
        transform: translateX(0%);
  
        width: 40vw;
      }
    }
  }
  