# Assignment 14.1
![img](./Screenshot.PNG)

Use command npm start to run the application

1)For registering                                       <br>
TYPE OF REQUEST :POST                                   <br>
/api/register

BODY: 

    {

        "fname": "Rahul",
        "lname": "Sawant",
        "email": "rahul.sawant@email.com",
        "username": "rahul.sawant",
        "password": "password@123"
    }

2)For logging in                                            <br>
TYPE OF REQUEST :POST                                       <br>
/api/login                                                  <br>
BODY:                                                       <br>

{

        "username":"rahul.sawant",
        "password":"password@123"
    }

3)To add assets                                      <br>
TYPE OF REQUEST :POST                               <br>
/api/holdings                                       <br>
BODY: {

        "asset_type": "FIXEDINCOME",
        "asset_id": "Rkhiugdic7428HG87",
        "asset_value": 200,
        "intrest_rate": 3,
        "invested_date": "2020-12-11T18:30:00.000Z",
        "invested_period_years": 5,
        "maturity_date": null,
        "status": "ACTIVE",
        "expense_type":"CREDIT"
    }
	
4)To fetch all assets                               <br>
TYPE OF REQUEST :GET                            <br>
/api/holdings                                   <br>

5)To fetch income, expenses and savings         <br>
TYPE OF REQUEST :GET                            <br>
/api/holdings/stats                              <br>

6)To fetch asset using asset_id                  <br>
TYPE OF REQUEST :GET                             <br>
/api/holdings/:id                                <br>

7)To update asset using asset_id                <br>
TYPE OF REQUEST :PUT                           <br>
/api/holdings/:id                              <br>

BODY:
	{

        "asset_value": 200,
        "intrest_rate": 3,
        "invested_date": "2020-12-11",
        "invested_period_years": 5,
        
    }
	
8)To activate asset using asset_id<br>
TYPE OF REQUEST :PUT             <br>
/api/holdings/activate/:id       <br>

9)To inactivate asset using asset_id              <br>
TYPE OF REQUEST :PUT                             <br>
/api/holdings/inactivate/:id 