using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class TutorCourseDAO
    {
        public static readonly string TABLE_NAME = "tutorcourse";
        public static readonly string COLUMN_ID = "Id";
        public static readonly string COLUMN_ID_TUTOR = "IdTutor";
        public static readonly string COLUMN_ID_COURSE = "IdCourse";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @id";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_ID_TUTOR + ", " + COLUMN_ID_COURSE + ") " +
            "OUTPUT INSERTED.id VALUES(@idTutor, @idCourse)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_ID_TUTOR + " = @idTutor, " +
            COLUMN_ID_COURSE + " = @idCourse WHERE " + COLUMN_ID + " = @id";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @id";



        public static List<TutorCourse> Query()
        {
            List<TutorCourse> result = new List<TutorCourse>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    result.Add(new TutorCourse(reader));
                }
            }
            return result;
        }

        public static TutorCourse Insert(TutorCourse tutorCourse)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@idTutor", tutorCourse.IdTutor);
                command.Parameters.AddWithValue("@idCourse", tutorCourse.IdCourse);

                int id = (int)command.ExecuteScalar();
                tutorCourse.IdCourse = id;
            }

            return tutorCourse;
        }

        public static TutorCourse Get(int id)
        {
            TutorCourse tutorCourse = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@id", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    tutorCourse = new TutorCourse(reader);
                }
            }

            return tutorCourse;

        }

        public static bool Delete(int id)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@id", id);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(TutorCourse tutorCourse)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idCourse", tutorCourse.IdCourse);
                command.Parameters.AddWithValue("@idTutor", tutorCourse.IdTutor);
                command.Parameters.AddWithValue("@id", tutorCourse.Id);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}