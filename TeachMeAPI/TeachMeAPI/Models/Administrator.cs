using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class Administrator
    {
        [JsonProperty(PropertyName = "idAdmin")]
        public int IdAdmin { get; set; }
        [JsonProperty(PropertyName = "username")]
        public string Username { get; set; }
        [JsonProperty(PropertyName = "mail")]
        public string Mail { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }



        public Administrator()
        { }

        public Administrator(int id, string name, string mail, string password)
        {
            IdAdmin = id;
            Username = name;
            Mail = mail;
            Password = password;
        }

        public Administrator(SqlDataReader reader)
        {
            IdAdmin = Int32.Parse(reader[AdministratorDAO.COLUMN_ID_ADMIN].ToString());
            Username = reader[AdministratorDAO.COLUMN_USERNAME].ToString();
            Mail = reader[AdministratorDAO.COLUMN_MAIL].ToString();
            Password = reader[AdministratorDAO.COLUMN_PASSWORD].ToString();
        }
    }
}