
'''
inputs we need from the user :
total rent 
total food ordered for snacking 
electricity units spent 
charge per unit 
number of people living in room/flat

ouput :
total amount you have to pay is 

'''

rent = int(input("Enter your hostel/flat rent = "))
food = int(input('Enter the amount of food ordered = '))
electricity_spent = int(input("Enter the total of electricity spent = "))
charge_per_unit = int(input("Enter the charge per unit = "))
people = int(input('Enter the number of people living in room/flat = '))

total_bill = electricity_spent*charge_per_unit
output = (food+rent+total_bill)/people

print("Each person will have to pay : ",output)

