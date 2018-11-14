using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class Course
    {
        [JsonProperty(PropertyName = "idCourse")]
        public int IdCourse { get; set; }
        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }

        public Course() { }

        public Course(int idCourse, string label)
        {
            IdCourse = idCourse;
            Label = label;
        }

        public Course(SqlDataReader reader)
        {
            IdCourse = Int32.Parse(reader[CourseDAO.COLUMN_ID].ToString());
            Label = reader[CourseDAO.COLUMN_LABEL].ToString();
        }
    }
}