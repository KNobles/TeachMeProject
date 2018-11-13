using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.DAO;

namespace TeachMeAPI.Models
{
    public class Announcement
    {
        [JsonProperty(PropertyName = "idAnnouncement")]
        public int IdAnnouncement { get; set; }
        [JsonProperty(PropertyName = "idTutor")]
        public int IdTutor { get; set; }
        [JsonProperty(PropertyName = "idCourse")]
        public int IdCourse { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "fee")]
        public double Fee { get; set; }

        public Announcement()
        { }

        public Announcement(int idAnnouncement, int idTutor, int idCourse, string title, string description, double fee)
        {
            IdAnnouncement = idAnnouncement;
            IdCourse = idCourse;
            IdTutor = idTutor;
            Title = title;
            Description = description;
            Fee = fee;
        }

        public Announcement(SqlDataReader reader)
        {
            IdAnnouncement = Int32.Parse(reader[AnnouncementDAO.COLUMN_ID_ANNOUNCEMENT].ToString());
            IdCourse = Int32.Parse(reader[AnnouncementDAO.COLUMN_ID_COURSE].ToString());
            IdTutor = Int32.Parse(reader[AnnouncementDAO.COLUMN_ID_TUTOR].ToString());
            Title = reader[AnnouncementDAO.COLUMN_TITLE].ToString();
            Description = reader[AnnouncementDAO.COLUMN_DESCRIPTION].ToString();
            Fee = Double.Parse(reader[AnnouncementDAO.COLUMN_FEE].ToString());
        }
    }
}