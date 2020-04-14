using UsersWebService.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace UsersWebService.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : Controller {

        IList<Users> userList = new List<Users>();



        [EnableCors]
        [HttpGet()]
        public string getUsers()
        {
            Users user1 = new Users();
            Users user2 = new Users();
            Users user3 = new Users();
            user1.Id = 1; user1.username = "maxcast"; user1.nome = "Massimiliano"; user1.cognome = "Castorina"; user1.email = "massimiliano.castorina@bitsrl.net"; user1.password = "123";
            user2.Id = 2; user2.username = "fabgiac"; user2.nome = "Fabio"; user2.cognome = "Giacarta"; user2.email = "fabio.giacarta@hotmail.it"; user2.password = "456";
            user3.Id = 3; user3.username = "dancrist";  user3.nome = "Daniele"; user3.cognome = "Cristaldi"; user3.email = "daniele.cristaldi@hotmail.it"; user3.password = "789";

            userList.Add(user1);
            userList.Add(user2);
            userList.Add(user3);
            string jsonReturn = JsonSerializer.Serialize(userList);
            return jsonReturn;
        }


    }
}
