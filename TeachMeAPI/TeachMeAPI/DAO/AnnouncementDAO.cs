using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class AnnouncementDAO
    {
        public static readonly string TABLE_NAME = "announcement";
        public static readonly string COLUMN_ID_ANNOUNCEMENT = "IdAnnouncement";
        public static readonly string COLUMN_ID_COURSE = "IdCourse";
        public static readonly string COLUMN_ID_TUTOR = "IdTutor";
        public static readonly string COLUMN_TITLE = "Title";
        public static readonly string COLUMN_DESCRIPTION = "Description";
        public static readonly string COLUMN_FEE = "Fee";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID_ANNOUNCEMENT + " = @idAnnouncement";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_ID_COURSE + ", " + COLUMN_ID_TUTOR + ", " + COLUMN_TITLE
            + ", " + COLUMN_DESCRIPTION + ", " + COLUMN_FEE + ") OUTPUT INSERTED.idAnnouncement VALUES(@idCourse, @idTutor, @title, @desc, @fee)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_ID_COURSE + " = @idCourse, " + 
            COLUMN_ID_TUTOR + " = @idTutor, " + COLUMN_TITLE + " = @title, " + COLUMN_DESCRIPTION + " = @desc, " + COLUMN_FEE +
            " = @fee WHERE " + COLUMN_ID_ANNOUNCEMENT + " = @id";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID_ANNOUNCEMENT + " = @id";



        public static List<Announcement> Query()
        {
            List<Announcement> announces = new List<Announcement>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    announces.Add(new Announcement(reader));
                }
            }
            return announces;
        }

        public static Announcement Insert(Announcement announce)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@idCourse", announce.IdCourse);
                command.Parameters.AddWithValue("@idTutor", announce.IdTutor);
                command.Parameters.AddWithValue("@title", announce.Title);
                command.Parameters.AddWithValue("@desc", announce.Description);
                command.Parameters.AddWithValue("@fee", announce.Fee);



                int idAnnouncement = (int)command.ExecuteScalar();
                announce.IdAnnouncement = idAnnouncement;
            }

            return announce;
        }

        public static Announcement Get(int id)
            
        {
            Announcement announce = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@id", announce.IdAnnouncement);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    announce = new Announcement(reader);
                }
            }

            return announce;

        }

        public static bool Delete(int id)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@idAnnouncement", id);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(Announcement announce)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idCourse", announce.IdCourse);
                command.Parameters.AddWithValue("@idTutor", announce.IdTutor);
                command.Parameters.AddWithValue("@title", announce.Title);
                command.Parameters.AddWithValue("@desc", announce.Description);
                command.Parameters.AddWithValue("@fee", announce.Fee);
                command.Parameters.AddWithValue("@id", announce.IdAnnouncement);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}