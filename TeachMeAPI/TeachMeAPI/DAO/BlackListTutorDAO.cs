using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class BlackListTutorDAO
    {
        public static readonly string TABLE_NAME = "blacklisttutor";
        public static readonly string COLUMN_ID = "Id";
        public static readonly string COLUMN_ID_TUTOR = "IdTutor";
        public static readonly string COLUMN_DATEBEG = "DateBeg";
        public static readonly string COLUMN_DATEEND = "DateEnd";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @id";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_ID_TUTOR + ", " + COLUMN_DATEBEG + ", " + COLUMN_DATEEND +
            ") OUTPUT INSERTED.id VALUES(@idTutor, @dateBeg, @dateEnd)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_ID_TUTOR + " = @idTutor, " + COLUMN_DATEBEG + " = @dateBeg, "
            + COLUMN_DATEEND + " = @dateEnd WHERE " + COLUMN_ID + " = @id";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @id";



        public static List<BlackListTutor> Query()
        {
            List<BlackListTutor> black = new List<BlackListTutor>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    black.Add(new BlackListTutor(reader));
                }
            }
            return black;
        }

        public static BlackListTutor Insert(BlackListTutor black)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@idTutor", black.IdTutor);
                command.Parameters.AddWithValue("@dateBeg", black.DateBeg);
                command.Parameters.AddWithValue("@dateEnd", black.DateEnd);

                int id = (int)command.ExecuteScalar();
                black.Id = id;
            }

            return black;
        }

        public static BlackListTutor Get(int id)

        {
            BlackListTutor black = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@id", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    black = new BlackListTutor(reader);
                }
            }

            return black;

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

        public static bool Update(BlackListTutor black)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idTutor", black.IdTutor);
                command.Parameters.AddWithValue("@dateBeg", black.DateBeg);
                command.Parameters.AddWithValue("@dateEnd", black.DateEnd);
                command.Parameters.AddWithValue("@id", black.Id);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}