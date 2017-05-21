package server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Basic connection to PostgreSQL database.
 * Conexión básica a la base de datos PostgreSQL.
 *
 * @author Xules You can follow me on my website http://www.codigoxules.org/en
 * Puedes seguirme en mi web http://www.codigoxules.org).
 */
public class conexion {

    private Connection con;

    public Connection getCon(){return con;}


    /**
     * We establish the connection with the database <b>customerdb</b>.
     * Establecemos la conexión con la base de datos <b>customerdb</b>.
     */
     void connectDatabase() {
        try {
            // We register the PostgreSQL driver
            // Registramos el driver de PostgresSQL
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                System.out.println("Error al registrar el driver de PostgreSQL: " + ex);
            }

            /*// Database connect
            // Conectamos con la base de datos
            con = DriverManager.getConnection(
                    "jdbc:postgresql://192.168.0.32:5432/InfraWeb",
                    "postgres", "postgres");
                    */

            // Database connect
            // Conectamos con la base de datos
            con = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/InfraWeb",
                    "web", "stevens");



            boolean valid = con.isValid(2000);
            System.out.println(valid ? "TEST OK" : "TEST FAIL");
        } catch (SQLException sqle) {
            System.out.println("Error: " + sqle);
        }
    }

    /**
     * Method to connect to the database by passing parameters.
     * Método para establecer la conexión a la base de datos mediante el paso de parámetros.
     *
     * @param host <code>String</code> host name or ip. Nombre del host o ip.
     * @param port <code>String</code> listening database port. Puerto en el que escucha la base de datos.
     * @param database <code>String</code> database name for the connection. Nombre de la base de datos para la conexión.
     * @param user <code>String</code> user name. Nombre de usuario.
     * @param password  <code>String</code> user password. Password del usuario.
     */
    public void connectDatabase(String host, String port, String database,
                                String user, String password) {
        String url = "";
        try {
            // We register the PostgreSQL driver
            // Registramos el driver de PostgresSQL
            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException ex) {
                System.out.println("Error al registrar el driver de PostgreSQL: " + ex);
            }
            Connection connection = null;
            url = "jdbc:postgresql://" + host + ":" + port + "/" + database;
            // Database connect
            // Conectamos con la base de datos
            connection = DriverManager.getConnection(
                    url,
                    user, password);
            boolean valid = connection.isValid(50000);
            System.out.println(valid ? "TEST OK" : "TEST FAIL");
        } catch (SQLException sqle) {
            System.out.println("Error al conectar con la base de datos de PostgreSQL (" + url + "): " + sqle);
        }
    }
    /* prueba */

    public void close() throws SQLException {
        con.close();

    }

    /**
     * Testing Java PostgreSQL connection with host and port
     * Probando la conexión en Java a PostgreSQL especificando el host y el puerto.
     * @param args the command line arguments
     */



}