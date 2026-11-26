
'''
Workflow of the project :
1 - input from user (rock, paper, scissor)
2 - computer choice (using random module)
3 - print result 

Cases :
A - rock 
rock - rock = tie 
rock - paper = paper win 
rock - scissor = rock win 

B - paper 
paper - paper = tie 
paper - rock = paper 
paper - scissor = scissor win 

C - scissor 
scissor - scissor = tie 
scissor - rock = rock wins 
scissor - paper = scissor wins 

'''

import random 

item_list = ["rock",'paper','scissor']
user_choice = input('Enter your move (rock/paper/scissor) = ')
comp_choice = random.choice(item_list)

print(f"User choice = {user_choice} | Computer choice = {comp_choice}")


if user_choice == comp_choice:
	print("Both chooses same : Match tie !")

elif user_choice == 'rock':
	if comp_choice == "paper":
		print("paper covers rock = computer wins !")
	elif comp_choice == 'scissor':
		print('rock smashes scissor = you win !')

elif user_choice == 'paper':
	if comp_choice == 'rock':
		print('paper covers rock = you win !')
	elif comp_choice == 'scissor':
		print('scissor cuts paper = computer wins !')

elif user_choice == 'scissor':
	if comp_choice == "rock":
		print('rock smashes scissor = computer wins !')
	elif comp_choice == "paper":
		print('scissor cuts paper = you win !')

	