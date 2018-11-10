using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class EleveDAO
 
    {
        public static readonly string TABLE_NAME = "Eleve";
        public static readonly string COLUMN_ID = "IdEleve";
        public static readonly string COLUMN_NAME = "Name";
        public static readonly string COLUMN_MAIL = "Mail";
        public static readonly string COLUMN_PASSWORD = "Password";
        public static readonly string COLUMN_AVERTISSEMENT = "Avertissement";
        public static readonly string COLUMN_IS_MODERATEUR = "IsModerateur";
        public static readonly string COLUMN_TEL = "Tel";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @idEleve";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_NAME + ", " + COLUMN_PASSWORD + ", " + COLUMN_MAIL + ", "
            + COLUMN_TEL + ", " + COLUMN_AVERTISSEMENT+ ", " + COLUMN_IS_MODERATEUR 
            +") OUTPUT INSERTED.idEleve VALUES(@name, @password, @mail, @tel, 0, 0)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_NAME + " = @name, " + COLUMN_TEL + " = @tel, " + 
            COLUMN_PASSWORD + " = @password, " + COLUMN_AVERTISSEMENT + " = @avertissement, " + COLUMN_IS_MODERATEUR + " = @isModerateur, " 
            + COLUMN_MAIL + " = @mail WHERE " + COLUMN_ID + " = @idEleve";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @idEleve";



        public static List<Eleve> Query()
        {
            List<Eleve> eleves = new List<Eleve>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    eleves.Add(new Eleve(reader));
                }
            }
            return eleves;
        }

        public static Eleve Insert(Eleve eleve)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@name", eleve.Name);
                command.Parameters.AddWithValue("@mail", eleve.Mail);
                command.Parameters.AddWithValue("@tel", eleve.Tel);
                //A crypter !!!
                command.Parameters.AddWithValue("@password", eleve.Password);
                
                
                int idEleve = (int)command.ExecuteScalar();
                eleve.IdEleve = idEleve;
            }

            return eleve;
        }

        public static Eleve Get(int idEleve)
        {
            Eleve eleve = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GET, connection);

                command.Parameters.AddWithValue("@idEleve", idEleve);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    eleve = new Eleve(reader);
                }
            }

            return eleve;

        }

        public static bool Delete(int idEleve)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@idEleve", idEleve);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(Eleve eleve)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idEleve", eleve.IdEleve);
                command.Parameters.AddWithValue("@name", eleve.Name);
                command.Parameters.AddWithValue("@tel", eleve.Tel);
                command.Parameters.AddWithValue("@avertissement", eleve.Avertissement);
                command.Parameters.AddWithValue("@password", eleve.Password);
                command.Parameters.AddWithValue("@isModerateur", eleve.IsModerateur);
                command.Parameters.AddWithValue("@mail", eleve.Mail);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

    }
}