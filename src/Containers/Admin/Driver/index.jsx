import React from "react";
import Header from "../../Header";
import './style.css';

function Customer() {
return (
    <>

    <Header/>
    <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th className="th-sm">Name

      </th>
      <th className="th-sm">Email

      </th>
      <th className="th-sm">Mobile_No

      </th>
      <th className="th-sm">Status 
       </th>

       <th className="th-sm"> Action

       </th>
      
    </tr>
  </thead>
  <tbody>


    <tr>        
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      
    </tr>
    <tr>
      <td>Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td>66</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
     
    </tr>
    <tr>
      <td>Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      
    </tr>
    <tr>
      <td>Airi Satou</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>33</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
     
    </tr>
    <tr>
      <td>Brielle Williamson</td>
      <td>Integration Specialist</td>
      <td>New York</td>
      <td>61</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      
    </tr>
    <tr>
      <td>Herrod Chandler</td>
      <td>Sales Assistant</td>
      <td>San Francisco</td>
      <td>59</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      
    </tr>
    <tr>
      <td>Rhona Davidson</td>
      <td>Integration Specialist</td>
      <td>Tokyo</td>
      <td>55</td>
      <td>
        <button className="btn btn-primary"> Action Btn</button>
      </td>
      </tr>




  </tbody>
  
</table>
    </>
)

}

export default Customer;