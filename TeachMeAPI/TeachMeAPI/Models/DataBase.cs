using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TeachMeAPI.Models
{
    public class DataBase
    {
        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;Integrated Security=False;User ID=TeachMeAdmin;Password=********;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public static SqlConnection GetConnection()
        {
            return new SqlConnection(DataBase.CONNECTION_STRING);
        }
    }
}