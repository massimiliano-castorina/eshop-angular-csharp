using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UsersWebService.Model
{
    public class Users
    {
        public int Id { set; get; }
        public string nome { set; get; }
        public string cognome { set; get; }
        public string username { set; get; }
        public string email { set; get; }
        public string password { set; get; }

    }
}
