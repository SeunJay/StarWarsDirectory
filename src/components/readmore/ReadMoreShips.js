import React, { useState, useEffect } from "react";
import ViewMore from "../viewmore/ViewMore";
import ReadMorepage from "../readmore/ReadMorePage";
import { ships } from "../readmore/ReadMorePage";
import axios from "axios";

const ReadMoreShips = ({ match }) => {
  const [ship, setShip] = useState("");
  const searchItem = match.url.split("/")[1];
  const shipId = match.params.id;

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/${searchItem}/${shipId}/`
      )
      .then((res) => {
        setShip(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ReadMorepage page={ships} name={ship.name} />
      <div className="container">
        <div className="d-flex flex-column container">
          <h1 className="pt-5 pb-4">{ship.name}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, velit laudantium voluptas natus omnis id doloremque
            explicabo deserunt temporibus eius tempore aut alias provident
            beatae doloribus officia molestiae ad est repellat hic? Vitae ipsam
            totam perferendis laudantium pariatur nostrum ab! Molestias modi
            itaque quas rerum error earum odit amet nesciunt suscipit hic nemo,
            aspernatur atque deleniti deserunt, aperiam esse temporibus mollitia
            excepturi maxime, eos perspiciatis nulla numquam similique!
            Inventore, ad. Molestias alias, dolor suscipit quisquam architecto
            quia sequi aut eligendi illum illo omnis eaque reiciendis blanditiis
            voluptas aliquid, rem aliquam natus nesciunt nobis tenetur incidunt,
            odio distinctio facere vero. Dolore, veritatis? Fugit, quae eaque
            laborum, sequi mollitia repellendus molestiae architecto voluptatum
            doloribus accusantium hic quidem id quasi minima, necessitatibus
            iure nulla adipisci ducimus doloremque deleniti. Veritatis officiis
            voluptates dolores, animi eveniet tempore dolorum officia alias
            explicabo veniam at exercitationem! At totam fuga omnis
            reprehenderit alias suscipit doloribus dolore accusantium esse
            delectus rem sint excepturi impedit magni, inventore iusto? Illum
            impedit unde sed nisi illo eum quos vel. Id expedita dolorum sint
            magni? Quos totam reiciendis eligendi ipsa cupiditate repellat est
            asperiores adipisci facilis ratione fugit inventore suscipit odit
            deleniti, velit dignissimos non vitae dolores, cum porro provident
            quia eos aspernatur.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laboriosam enim sint reprehenderit minus sapiente nihil, sequi
            architecto recusandae ipsum ex doloribus aut ut impedit id iste est!
            Veniam optio repudiandae deleniti eum nemo sit, at earum repellendus
            culpa accusantium iusto magni ipsum recusandae voluptatibus
            similique. At nulla, omnis architecto assumenda nihil animi
            repudiandae quo! In facilis quis ab, sequi eum dicta corporis
            nesciunt fuga vero veniam mollitia repellendus labore officia,
            molestias aperiam minus est architecto rerum ad maiores repudiandae
            quam eos laboriosam. Ducimus, ratione ad. Natus temporibus quaerat
            deserunt modi sequi. Magni explicabo exercitationem dicta odio autem
            pariatur eum deserunt unde vitae cum modi iure harum, omnis commodi
            vero in eligendi nulla iste ratione consequuntur quas minima. Alias
            debitis praesentium maiores in, tempora blanditiis nam assumenda
            aliquam veritatis saepe et nisi corrupti, nesciunt sed.
            Reprehenderit praesentium perspiciatis ullam magnam quaerat ex rerum
            ducimus cumque, explicabo impedit qui nesciunt nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            reprehenderit nemo quasi eaque facilis veritatis! Asperiores a porro
            exercitationem, sunt voluptatum placeat perferendis amet distinctio
            id doloremque iste aliquam, maiores assumenda esse harum accusantium
            quia possimus facilis incidunt omnis nisi doloribus modi minima
            aliquid! Ipsam, minima ut voluptatum id laboriosam harum animi ab
            sed suscipit? Eligendi fugiat, aliquam quaerat cupiditate doloribus
            reiciendis libero architecto, consectetur a quidem harum vero
            dolorem id similique voluptate facilis unde est enim saepe at
            impedit quisquam explicabo? Minus libero fugiat incidunt, saepe sit
            illo neque.
          </p>
          <ViewMore tag="Recently Viewed Starships" />
        </div>
      </div>
    </>
  );
};

export default ReadMoreShips;
