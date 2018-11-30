using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TeachMeAPI.Models
{
    public class DataBase
    {
<<<<<<< HEAD
        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;Integrated Security=False;User ID=TeachMeAdmin;Password=********;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
=======
        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;User ID=TeachmeAdmin;Password=Azerty12;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

>>>>>>> 96d82f2e25698a1f5fa1bf1624e3a5e246113cea

        public static SqlConnection GetConnection()
        {
            return new SqlConnection(DataBase.CONNECTION_STRING);
        }
    }
}