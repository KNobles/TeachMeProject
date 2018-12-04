using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class TutorDAO
    {
        public static readonly string TABLE_NAME = "Tutor";
        public static readonly string COLUMN_ID = "IdTutor";
        public static readonly string COLUMN_NAME = "Username";
        public static readonly string COLUMN_MAIL = "Mail";
        public static readonly string COLUMN_PASSWORD = "Password";
        public static readonly string COLUMN_IS_WARNED = "IsWarned";
        public static readonly string COLUMN_IS_MODERATOR = "IsModerator";
        public static readonly string COLUMN_PHONE = "Phone";
        public static readonly string COLUMN_DESCRIPTION = "Description";
        public static readonly string COLUMN_EVALUATION = "Evaluation";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GETID = QUERY + " WHERE " + COLUMN_ID + " = @idTutor";
        public static readonly string GET = QUERY + " WHERE " + COLUMN_NAME + " = @username AND "+ COLUMN_PASSWORD + " = @password";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_NAME + ", " + COLUMN_PASSWORD + ", " + COLUMN_MAIL + ", "
            + COLUMN_PHONE + ", " + COLUMN_IS_WARNED + ", " + COLUMN_IS_MODERATOR + ", " + COLUMN_DESCRIPTION + ", " + COLUMN_EVALUATION
            + ") OUTPUT INSERTED.idTutor VALUES(@username, @password, @mail, @tel, 0, 0, @description, 100)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_NAME + " = @username, " + COLUMN_PHONE + " = @tel, " +
            COLUMN_PASSWORD + " = @password, "+ COLUMN_MAIL + " = @mail, " + COLUMN_DESCRIPTION + " = @desc WHERE " + COLUMN_ID + " = @idTutor";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @idTutor";



        public static List<Tutor> Query()
        {
            List<Tutor> tutors = new List<Tutor>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    tutors.Add(new Tutor(reader));
                }
            }
            return tutors;
        }

        public static Tutor Insert(Tutor tutor)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@username", tutor.UserName);
                command.Parameters.AddWithValue("@mail", tutor.Mail);
                command.Parameters.AddWithValue("@tel", tutor.Phone);
                command.Parameters.AddWithValue("@description", tutor.Description);
                //A crypter !!!
                command.Parameters.AddWithValue("@password", tutor.Password);


                int idTutor = (int)command.ExecuteScalar();
                tutor.IdTutor = idTutor;
            }

            return tutor;
        }

        public static Tutor Get(int idTutor)
        {
            Tutor tutor = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GETID, connection);

                command.Parameters.AddWithValue("@idTutor", idTutor);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    tutor = new Tutor(reader);
                }
            }

            return tutor;

        }

        public static Tutor Get(String username, String password)
        {
            Tutor tutor = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@username", username);
                command.Parameters.AddWithValue("@password", password);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    tutor = new Tutor(reader);
                }
            }
            return tutor;
        }

        public static bool Delete(int idTutor)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@idTutor", idTutor);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(Tutor tutor)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idTutor", tutor.IdTutor);
                command.Parameters.AddWithValue("@username", tutor.UserName);
                command.Parameters.AddWithValue("@tel", tutor.Phone);

                command.Parameters.AddWithValue("@password", tutor.Password);        
                command.Parameters.AddWithValue("@mail", tutor.Mail);
                command.Parameters.AddWithValue("@desc", tutor.Description);


                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}