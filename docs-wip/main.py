#%% numeric types

# int
number_1 = 10000024
print("number_1 is %s with value: %s " % (type(number_1), number_1))

# float
number_2 = 3.14
print("number_2 is %s with value: %s " % (type(number_2), number_2))

# complex
number_3 = 120+3j
print("number_3 is %s with value: %s " % (type(number_3), number_3))

# %% string types

# string using "
string_1 = "hello python"
print("string_1 is %s with value: %s " % (type(string_1), string_1))
print()

# string using '
string_2 = 'for the horde!'
print("string_2 is %s with value: %s " % (type(string_2), string_2))
print()

# multi-line string
string_3 = """Selamat
Belajar
Python"""
print("string_3 is %s with value: %s " % (type(string_3), string_3))
print()

# multi-line string
string_4 = '''
Sesuk
Preiiii
'''
print("string_4 is %s with value: %s " % (type(string_4), string_4))

#%% bool

bool_1 = True
print("bool_1 is %s with value: %s " % (type(bool_1), bool_1))

bool_2 = False
print("bool_2 is %s with value: %s " % (type(bool_2), bool_2))

# %% list

# list with int as element's data type
list_1 = [2, 4, 8, 16]
print("list_1 is %s with value: %s " % (type(list_1), list_1))
print("list_1 index 0 is %s with value: %s " % (type(list_1[0]), list_1[0]))
print("list_1 index 2 is %s with value: %s " % (type(list_1[2]), list_1[2]))

# list with str as element's data type
list_2 = ["grayson", "jason", "tim", "damian"]
print("list_2 is %s with value: %s " % (type(list_2), list_2))
print("list_2 index 1 is %s with value: %s " % (type(list_2[1]), list_2[1]))

# list with various data type in the element
list_3 = [24, False, "Hello Python"]
print("list_3 is %s with value: %s " % (type(list_3), list_3))
print("list_3 index 0 is %s with value: %s " % (type(list_3[0]), list_3[0]))
print("list_3 index 1 is %s with value: %s " % (type(list_3[1]), list_3[1]))
print("list_3 index 2 is %s with value: %s " % (type(list_3[2]), list_3[2]))

# %% tuple

# tuple with int as element's data type
tuple_1 = (2, 3, 4)
print("tuple_1 is %s with value: %s " % (type(tuple_1), tuple_1))
print("tuple_1 index 2 is %s with value: %s " % (type(tuple_1[2]), tuple_1[2]))

# tuple with str as element's data type
tuple_2 = ("numenor", "valinor")
print("tuple_2 is %s with value: %s " % (type(tuple_2), tuple_2))
print("tuple_2 index 1 is %s with value: %s " % (type(tuple_2[1]), tuple_2[1]))

# tuple with various data type in the element
tuple_3 = (24, False, "Hello Python")
print("tuple_3 is %s with value: %s " % (type(tuple_3), tuple_3))
print("tuple_3 index 0 is %s with value: %s " % (type(tuple_3[0]), tuple_3[0]))
print("tuple_3 index 1 is %s with value: %s " % (type(tuple_3[1]), tuple_3[1]))
print("tuple_3 index 2 is %s with value: %s " % (type(tuple_3[2]), tuple_3[2]))

# %%
