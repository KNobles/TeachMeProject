using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class TutorCourse
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "idTutor")]
        public int IdTutor { get; set; }
        [JsonProperty(PropertyName = "idCourse")]
        public int IdCourse { get; set; }

        public TutorCourse() { }

        public TutorCourse(int id, int idTutor, int idCourse)
        {
            Id = id;
            IdTutor = idTutor;
            IdCourse = idCourse;
        }

        public TutorCourse(SqlDataReader reader)
        {
            Id = Int32.Parse(reader[TutorCourseDAO.COLUMN_ID].ToString());
            IdTutor = Int32.Parse(reader[TutorCourseDAO.COLUMN_ID_TUTOR].ToString());
            IdCourse = Int32.Parse(reader[TutorCourseDAO.COLUMN_ID_COURSE].ToString());
        }
    }
}