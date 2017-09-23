//Action Inputs:
// hostname : string
// instance : string
// domain   : string
// user     : string
// password : SecureString

//Action Result:  Array/string


var jdbc = new JDBCConnection;
var url = "jdbc:jtds:sqlserver://"+hostname
if (instance != null && instance.length > 0){
	url = url+";instance="+instance;
}
if (domain != null && domain.length > 0) {
	url = url+";domain="+domain;
}
var connection = jdbc.getConnection(url,user,password);
var statement = connection.prepareStatement("SELECT name FROM sys.databases");
var result = statement.executeQuery();

var dbNames = [];
while (result.next()){
	dbNames.push(result.getString("name"));
}
return dbNames;
