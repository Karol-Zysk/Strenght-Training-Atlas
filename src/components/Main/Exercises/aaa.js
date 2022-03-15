.container {
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
}

.main_navbar {
  width: 100%;
  padding-top: 2vh;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
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
  max-width: 100%;
  height: auto;
  display: grid;
  grid-gap: 0.5vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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

.muscle_info {
  
    width: 70vw;
    height: auto;
    background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(80, 79, 79));
    color: rgb(255, 255, 255);
    /* box-shadow: 0.3em 0.5rem 0.6em 0.2rem rgba(255, 255, 255, 0.644); */
    text-align: left;
    padding: 4rem 6rem 4rem 7rem;
    margin: 0.3rem 0rem 7rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
  
}

.muscle_info_card_logo {
  width: 20vw;
  align-self: flex-end;
  margin: 0vw 3vw 4vw;
}

.muscle_info_h2 {
  text-align: center;
  padding-bottom: 2vh;
}

.muscle_info_img {
  width: 60%;
}

.muscle_info_paragraph {
  font-size: 2.1rem;
  padding: 2vw 1vw 2vw 0vw;
}

.muscle_info_description {
  font-size: 1.3rem;
}




@keyframes big_card_show {
  from {
    transform: translateX(400%);
    width: 0vw;
  }
  to {
    transform: translateX(0%);
    width: 30vw;
  }
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