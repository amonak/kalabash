import os
import tempfile
import unittest

from kalabash.lib.sysutils import exec_cmd

DB = os.environ.get("DB", "postgres")
if DB.lower() == "postgres":
    PORT = os.environ.get("POSTGRES_PORT", "5432")
    DB = "postgres"
else:
    PORT = os.environ.get("MYSQL_PORT", "3306")
    DB = "mysql"


class DeployTest(unittest.TestCase):
    dbtype = DB
    dbhost = "localhost"
    dbport = PORT
    projname = "kalabash_test"
    dbuser = DB == "mysql" and "kalabash" or "postgres"
    dbpassword = DB == "mysql" and "kalabash" or "postgres"

    def setUp(self):
        self.workdir = tempfile.mkdtemp()

    def test_silent(self):
        dburl = "default:%s://%s:%s@%s:%s/%s" % (
            self.dbtype,
            self.dbuser,
            self.dbpassword,
            self.dbhost,
            self.dbport,
            "kalabash",
        )
        cmd = (
            "kalabash-admin.py deploy --collectstatic "
            "--dburl %s --domain %s --admin-username admin %s"
            % (dburl, "localhost", self.projname)
        )
        code, output = exec_cmd(cmd, cwd=self.workdir)
        self.assertEqual(code, 0)


if __name__ == "__main__":
    unittest.main()
