using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class BlackListTutor
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "idTutor")]
        public int IdTutor { get; set; }
        [JsonProperty(PropertyName = "dateBeg")]
        public DateTime DateBeg { get; set; }
        [JsonProperty(PropertyName = "dateEnd")]
        public DateTime DateEnd { get; set; }




        public BlackListTutor()
        { }

        public BlackListTutor(int id, int idTutor, DateTime dateBeg, DateTime dateEnd)
        {
            Id = id;
            IdTutor = idTutor;
            DateBeg = dateBeg;
            DateEnd = dateEnd;
        }

        public BlackListTutor(SqlDataReader reader)
        {
            Id = Int32.Parse(reader[BlackListTutorDAO.COLUMN_ID].ToString());
            IdTutor = Int32.Parse(reader[BlackListTutorDAO.COLUMN_ID_TUTOR].ToString());
            DateBeg = DateTime.Parse(reader[BlackListTutorDAO.COLUMN_DATEBEG].ToString());
            DateEnd = DateTime.Parse(reader[BlackListTutorDAO.COLUMN_DATEEND].ToString());

        }
    }
}