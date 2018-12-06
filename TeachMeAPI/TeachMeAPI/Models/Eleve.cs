using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    //DTO
    public class Eleve
    {
        [JsonProperty(PropertyName = "idEleve")]
        public int IdEleve { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "mail")]
        public string Mail { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }
        [JsonProperty(PropertyName = "avertissement")]
        public bool Avertissement { get; set; }
        [JsonProperty(PropertyName = "tel")]
        public string Tel { get; set; }
        [JsonProperty(PropertyName = "isModerateur")]
        public bool IsModerateur { get; set; }
        [JsonProperty(PropertyName = "token")]
        public string Token { get; set; }



        public Eleve()
        { }

        public Eleve(int id, string name, string mail, string password, string tel, bool avertissement, bool isModerateur, string token)
        {
            IdEleve = id;
            Name = name;
            Mail = mail;
            Password = password;
            Tel = tel;
            Avertissement = avertissement;
            IsModerateur = isModerateur;
            Token = token;
        }

        public Eleve(SqlDataReader reader)
        {
            IdEleve = Int32.Parse(reader[EleveDAO.COLUMN_ID].ToString());
            Name = reader[EleveDAO.COLUMN_NAME].ToString();
            Mail = reader[EleveDAO.COLUMN_MAIL].ToString();
            Password = reader[EleveDAO.COLUMN_PASSWORD].ToString();
            Avertissement = Boolean.Parse(reader[EleveDAO.COLUMN_AVERTISSEMENT].ToString());
            Tel = reader[EleveDAO.COLUMN_TEL].ToString();
            IsModerateur = Boolean.Parse(reader[EleveDAO.COLUMN_IS_MODERATEUR].ToString());
            Token= reader[EleveDAO.COLUMN_TOKEN].ToString();
        }

    }
}