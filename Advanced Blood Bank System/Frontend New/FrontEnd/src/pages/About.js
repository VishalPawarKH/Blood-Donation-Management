import Base from "../components/Base"
import './About.css'; // adjust path if needed


import CustomNavbar from "../components/CustomNavbar";

const aboutus = () => {
  return (
    <div>
      {}
    <CustomNavbar/>

      <div
        style={{
          padding:"15px",
          backgroundColor: "#ecf6fe",
          color: "#043c6d",
        }}
      >
        <h3>About Us</h3>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-12">
            <p>
              BBlood donation is a crucial components of modern healthcare.
               Managing blood supplies is a complex and critical task, as blood products are essential for saving lives. 
               Due to their perishable nature, these products require careful handling, timely processing,
                and precise administration to ensure their effectiveness in life-threatening situations. 
                Blood transfusions play a vital role in medical treatment and are integral to saving lives.
            </p>
            <p>
            The significant challenge of blood management has been greatly eased with the advancement
             of information and computer technologies.
              The e-Blood Bank system is an integrated blood bank automation platform that
               connects all the blood banks in the state through a unified network.
                This system, known as the Integrated Blood Bank Management Information System (MIS),
                 electronically collects, validates, stores, and shares data related to
                  blood donation and transfusion services. 
                 It can compile various types of data into clear, 
                 actionable reports that assist in decision-making,
                  ranging from efficient donor screening to the optimal distribution of blood. 
                  This digital process makes it easier for the public to check the availability of blood
                   in nearby banks with just a few clicks, enabling them to request specific blood types, especially rare ones,
                    and ultimately help save lives.
            </p>
            <p>
            The system also offers real-time updates on the availability of blood units,
             categorized by blood group, in all licensed blood banks across the state.
              Additionally, it features an online tracking system that allows state-level
               administrators to monitor the movement and status of blood and its components.
                This comprehensive platform oversees the entire process, 
                from the collection of blood at donation camps and hospitals
                 to the distribution of blood units. It covers all aspects,
                  including donor screening, blood collection, required testing, 
                  storage, and the issuance of blood units, including whole blood, 
                  different blood components, and apheresis blood products.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Blood Collection Management</li>
              <li>Blood Issue Management</li>
              <li>Inventory Management</li>
              <li>Stock Management</li>
              <li>Camp Management</li>
              <li>User and System Management</li>
            </ul>
            <p>
              <strong>Advantages:</strong>
            </p>
            <ul>
              <li>
                State &amp; Blood Bank dashboard to provide the group wise blood
                stocks status for all stakeholders.
              </li>
              <li>
                Dashboards for Blood Bank Officers (Tested/ Untested/ Buffer
                stock of blood units)
              </li>
              <li>
                Distribution of blood from mother blood banks to blood storage
                centers.
              </li>
              <li>
                Recruitment and retention of the regular blood donors in the
                state.{" "}
              </li>
              <li>
                Maintain all the registers according to Drugs &amp; Cosmetic Act
                of 1940.
              </li>
              <li>
                Inventory of kits and consumables with alert for short expiry.{" "}
              </li>
              <li>
                Alert mechanism for License, regular donors, organization to do
                VBD Camps.
              </li>
              <li>Provides a paperless donor room </li>
              <li>
                Real time information form collection to testing and use of
                blood and blood products.
              </li>
              <li>Unique bar coding for each blood packets.</li>
              <li>
                The citizen can access the availability of blood units from any
                blood bank of India.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <img className="css-border" src="https://i.pravatar.cc/75" />   
        <img className="css-shadow" src="https://i.pravatar.cc/75" />  */}
    </div>
  );
};

export default aboutus;
