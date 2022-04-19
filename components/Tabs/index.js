import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  console.log(activeTab);
  return (
    <div className="flex flex-col space-y-10 w-full">
      <ul className="flex  space-x-4">
        <TabNavItem
          title="Frontend Dev."
          img="react.png"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Restful API"
          img="express.png"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="UI (Style)"
          img="tailwind.png"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className=" flex flex-col items-center justify-center w-full">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet odio et purus tempus elementum. Maecenas eleifend eros
            eget eros varius ultrices. Morbi interdum malesuada efficitur. Fusce
            at maximus nulla. Integer faucibus est ut arcu rhoncus malesuada. In
            id posuere mi. Maecenas et orci lacus. In hac habitasse platea
            dictumst. Vestibulum suscipit ut ex ac gravida.
          </p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>
            Suspendisse massa elit, efficitur sed maximus aliquet, hendrerit vel
            purus. Integer nec congue erat. Phasellus efficitur feugiat dui
            consequat hendrerit. Fusce venenatis dictum quam sit amet tincidunt.
            Phasellus volutpat metus eget lorem cursus vehicula. Curabitur
            efficitur, quam sed sagittis congue, augue ipsum luctus ipsum, vitae
            gravida nulla risus a orci. Ut arcu est, lacinia sit amet diam in,
            molestie iaculis dui.
          </p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>
            Phasellus efficitur velit magna, ac tempus odio consequat id. Donec
            mollis in mi sit amet vulputate. Aenean mattis vestibulum velit eget
            tempus. Donec imperdiet elit a neque ultrices, blandit faucibus quam
            rhoncus. Cras sagittis lacus sollicitudin nulla condimentum, eget
            cursus dui sollicitudin. Maecenas velit eros, tristique eu
            scelerisque et, scelerisque ac enim. Curabitur libero purus,
            pharetra vestibulum viverra sit amet, vulputate nec nulla. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Fusce nec nunc viverra, luctus libero a, feugiat
            lectus. scelerisque et, scelerisque ac enim. Curabitur libero purus,
            pharetra vestibulum viverra sit amet, vulputate nec nulla.
          </p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
