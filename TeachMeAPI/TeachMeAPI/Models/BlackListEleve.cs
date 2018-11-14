using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class BlackListEleve
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "idEleve")]
        public int IdEleve { get; set; }
        [JsonProperty(PropertyName = "dateBeg")]
        public DateTime DateBeg { get; set; }
        [JsonProperty(PropertyName = "dateEnd")]
        public DateTime DateEnd { get; set; }




        public BlackListEleve()
        { }

        public BlackListEleve(int id, int idEleve, DateTime dateBeg, DateTime dateEnd)
        {
            Id = id;
            IdEleve = idEleve;
            DateBeg = dateBeg;
            DateEnd = dateEnd;
        }

        public BlackListEleve(SqlDataReader reader)
        {
            Id = Int32.Parse(reader[BlackListEleveDAO.COLUMN_ID].ToString());
            IdEleve = Int32.Parse(reader[BlackListEleveDAO.COLUMN_ID_ELEVE].ToString());
            DateBeg = DateTime.Parse(reader[BlackListEleveDAO.COLUMN_DATEBEG].ToString());
            DateEnd = DateTime.Parse(reader[BlackListEleveDAO.COLUMN_DATEEND].ToString());

        }

    }
}