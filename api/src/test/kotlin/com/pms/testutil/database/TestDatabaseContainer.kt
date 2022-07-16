package com.pms.testutil.database

import org.testcontainers.containers.MySQLContainer

class TestDatabaseContainer : MySQLContainer<TestDatabaseContainer>("mysql:8.0")