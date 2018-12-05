using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class Tutor
    {
        [JsonProperty(PropertyName = "idTutor")]
        public int IdTutor { get; set; }
        [JsonProperty(PropertyName = "username")]
        public string UserName { get; set; }
        [JsonProperty(PropertyName = "mail")]
        public string Mail { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }
        [JsonProperty(PropertyName = "isWarned")]
        public bool IsWarned { get; set; }
        [JsonProperty(PropertyName = "phone")]
        public string Phone { get; set; }
        [JsonProperty(PropertyName = "isModerator")]
        public bool IsModerator { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "evaluation")]
        public double Evaluation { get; set; }
        [JsonProperty(PropertyName = "token")]
        public string Token { get; set; }

        public Tutor()
        { }

        public Tutor(int id, string name, string mail, string password, string tel, bool avertissement, bool isModerateur, string description, double evaluation, string token)
        {
            IdTutor = id;
            UserName = name;
            Mail = mail;
            Password = password;
            Phone = tel;
            IsWarned = avertissement;
            IsModerator = isModerateur;
            Description = description;
            Evaluation = evaluation;
            Token = token;
        }

        public Tutor(SqlDataReader reader)
        {
            IdTutor = Int32.Parse(reader[TutorDAO.COLUMN_ID].ToString());
            UserName = reader[TutorDAO.COLUMN_NAME].ToString();
            Mail = reader[TutorDAO.COLUMN_MAIL].ToString();
            Password = reader[TutorDAO.COLUMN_PASSWORD].ToString();
            IsWarned = Boolean.Parse(reader[TutorDAO.COLUMN_IS_WARNED].ToString());
            Phone = reader[TutorDAO.COLUMN_PHONE].ToString();
            IsModerator = Boolean.Parse(reader[TutorDAO.COLUMN_IS_MODERATOR].ToString());
            Description = reader[TutorDAO.COLUMN_DESCRIPTION].ToString();
            Evaluation = Double.Parse(reader[TutorDAO.COLUMN_EVALUATION].ToString());
            Token = reader[TutorDAO.COLUMN_TOKEN].ToString();

        }
    }
}