using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class BlackListEleveDAO
    {
        public static readonly string TABLE_NAME = "blacklisteleve";
        public static readonly string COLUMN_ID = "Id";
        public static readonly string COLUMN_ID_ELEVE = "IdEleve";
        public static readonly string COLUMN_DATEBEG = "DateBeg";
        public static readonly string COLUMN_DATEEND = "DateEnd";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @id";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_ID_ELEVE + ", " + COLUMN_DATEBEG + ", " + COLUMN_DATEEND +
            ") OUTPUT INSERTED.id VALUES(@idEleve, @dateBeg, @dateEnd)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_ID_ELEVE + " = @idEleve, " +  COLUMN_DATEBEG + " = @dateBeg, " 
            + COLUMN_DATEEND + " = @dateEnd WHERE " + COLUMN_ID + " = @id";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @id";



        public static List<BlackListEleve> Query()
        {
            List<BlackListEleve> black = new List<BlackListEleve>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    black.Add(new BlackListEleve(reader));
                }
            }
            return black;
        }

        public static BlackListEleve Insert(BlackListEleve black)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@idEleve", black.IdEleve);
                command.Parameters.AddWithValue("@dateBeg", black.DateBeg);
                command.Parameters.AddWithValue("@dateEnd", black.DateEnd);

                int id = (int)command.ExecuteScalar();
                black.Id = id;
            }

            return black;
        }

        public static BlackListEleve Get(int id)

        {
            BlackListEleve black = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@id", id);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    black = new BlackListEleve(reader);
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

        public static bool Update(BlackListEleve black)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idEleve", black.IdEleve);
                command.Parameters.AddWithValue("@dateBeg", black.DateBeg);
                command.Parameters.AddWithValue("@dateEnd", black.DateEnd);
                command.Parameters.AddWithValue("@id", black.Id);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}