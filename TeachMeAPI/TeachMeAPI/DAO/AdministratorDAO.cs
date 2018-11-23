using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

using TeachMeAPI.Models;

namespace TeachMeAPI.DAO
{
    public class AdministratorDAO
    {

        public static readonly string TABLE_NAME = "administrator";
        public static readonly string COLUMN_ID_ADMIN = "IdAdmin";
        public static readonly string COLUMN_USERNAME = "Username";
        public static readonly string COLUMN_MAIL = "Mail";
        public static readonly string COLUMN_PASSWORD = "Password";

        public static readonly string QUERY = "SELECT * FROM " + TABLE_NAME;
        public static readonly string GETID = QUERY + " WHERE " + COLUMN_ID_ADMIN + " = @idAdmin";
        public static readonly string GETPASSWORD = QUERY + " WHERE " + COLUMN_PASSWORD + " = @password";
        public static readonly string INSERT = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_USERNAME + ", " + COLUMN_PASSWORD + ", " + COLUMN_MAIL
            + ") OUTPUT INSERTED.idAdmin VALUES(@name, @password, @mail)";
        public static readonly string UPDATE = "UPDATE " + TABLE_NAME + " SET " + COLUMN_USERNAME + " = @name, " + COLUMN_PASSWORD + " = @password, " 
            + COLUMN_MAIL + " = @mail WHERE " + COLUMN_ID_ADMIN + " = @idAdmin";
        public static readonly string DELETE = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID_ADMIN + " = @idAdmin";



        public static List<Administrator> Query()
        {
            List<Administrator> admin = new List<Administrator>();
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(QUERY, connection);

                //le reader lit au fur et à mesure tous les records renvoyés depuis la bdd
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    admin.Add(new Administrator(reader));
                }
            }
            return admin;
        }

        public static Administrator Insert(Administrator admin)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(INSERT, connection);

                command.Parameters.AddWithValue("@name", admin.Username);
                command.Parameters.AddWithValue("@mail", admin.Mail);
                //A crypter !!!
                command.Parameters.AddWithValue("@password", admin.Password);


                int idAdmin = (int)command.ExecuteScalar();
                admin.IdAdmin = idAdmin;
            }

            return admin;
        }

        public static Administrator Get(int idAdmin)
        {
            Administrator admin = null;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GETID, connection);

                command.Parameters.AddWithValue("@idAdmin", idAdmin);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    admin = new Administrator(reader);
                }
            }

            return admin;

        }

        public static bool Get(String password)
        {
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(GETPASSWORD, connection);

                command.Parameters.AddWithValue("@password", password);

                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    return true;
                }
            }
            return false;
        }

        public static bool Delete(int idAdmin)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(DELETE, connection);

                command.Parameters.AddWithValue("@idAdmin", idAdmin);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }

        public static bool Update(Administrator admin)
        {
            bool state = false;
            using (SqlConnection connection = DataBase.GetConnection())
            {
                connection.Open();
                SqlCommand command = new SqlCommand(UPDATE, connection);

                command.Parameters.AddWithValue("@idAdmin", admin.IdAdmin);
                command.Parameters.AddWithValue("@name", admin.Username);
                command.Parameters.AddWithValue("@password", admin.Password);
                command.Parameters.AddWithValue("@mail", admin.Mail);

                state = command.ExecuteNonQuery() != 0;

            }
            return state;
        }
    }
}