using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class CourseDAO
    {
        public static readonly string TABLE_NAME = "Course";
        public static readonly string COLUMN_ID = "IdCourse";
        public static readonly string COLUMN_LABEL = "Label";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @idCourse";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_LABEL + ") OUTPUT INSERTED.idCourse VALUES(@label)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_LABEL + " = @label WHERE " + COLUMN_ID + " = @idCourse";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @idCourse";



        public static List<Course> Query()
        {
            List<Course> courses = new List<Course>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    courses.Add(new Course(reader));
                }
            }
            return courses;
        }

        public static Course Insert(Course course)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@label", course.Label);

                int idCourse = (int)command.ExecuteScalar();
                course.IdCourse = idCourse;
            }

            return course;
        }

        public static Course Get(int idCourse)
        {
            Course course = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@idCourse", idCourse);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    course = new Course(reader);
                }
            }

            return course;

        }

        public static bool Delete(int idCourse)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@idCourse", idCourse);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(Course course)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idCourse", course.IdCourse);
                command.Parameters.AddWithValue("@label", course.Label);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}