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
        public static readonly string COLUMN_ID = "ID";
        public static readonly string COLUMN_NAME = "Name";
        public static readonly string COLUMN_MAIL = "Mail";
        public static readonly string COLUMN_PASSWORD = "Password";
        public static readonly string COLUMN_AVERTISSEMENT = "Avertissement";
        public static readonly string COLUMN_IS_MODERATEUR = "IsModerateur";
        public static readonly string COLUMN_TEL = "Tel";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GET = QUERY + " WHERE " + COLUMN_ID + " = @id";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_NAME + ", " + COLUMN_PASSWORD + ", " + COLUMN_MAIL + ", "
            + COLUMN_TEL + ") OUTPUT INSERTED.id VALUES(@name, @password, @mail, @tel)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_NAME + " = @name, " + COLUMN_MAIL +
            " = @mail WHERE " + COLUMN_ID + " = @id";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = @id";



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
                
                int id = (int)command.ExecuteScalar();
                eleve.Id = id;
            }

            return eleve;
        }

    }
}