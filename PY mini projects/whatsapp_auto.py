
# step-1 install required libraries 
from twilio.rest import Client 
from datetime import datetime, timedelta
import time 

# step-2 twilio credentials 
account_sid = '<account_sid>'
auth_token = '<auth_token>'
number = 0

client = Client(account_sid,auth_token)

# step-3 define send message function 
def send_whatsapp_message(recipient_number,message_body):
	try :
		message = client.messages.create(
			from_ = f'whatsapp:+{number}',
			body=message_body,
			to=f'whatsapp:{recipient_number}'
		)
		print(f'Message sent successfully! Message SID {message.SID}')
	except Exception as e :
		print(e)
		print('An error occurred')

# step-4 take user input 
name = input('Enter recipient name = ')
recipient_number = input('Enter the recipient whatsapp number with country code (e.g, +12345) = ')
message_body = input(f'enter the message you want to send to {name} : ')

# step-5 parse date/time and calculate delay 
date_str = input('enter the date to send the message (YYYY-MM-DD) : ')
time_str = input('enter the time to send the message (HH:MM in 24 hour format) : ')

schedule_datetime = datetime.strptime(f'{date_str} {time_str}','%Y-%m-%d %H:%M')
current_datetime = datetime.now()

time_difference = schedule_datetime-current_datetime
delay_seconds = time_difference.total_seconds()

if delay_seconds <= 0:
	print('The specified time is in the past. Please enter the future date and time')
else :
	print(f'Message scheduled to be sent to {name} at {schedule_datetime}.')
	# wait unitl the scheduled time 
	time.sleep(delay_seconds)
	# send the message 
	send_whatsapp_message(recipient_number,message_body)



