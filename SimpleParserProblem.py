#link to problem https://www.reddit.com/r/algorithms/comments/7a74u5/help_with_math_expression_calculator/
#description: evaluate prefix expressions
testString  = "( * 4 5 2 )"
testString2 = "( * ( * 1 12 ) ( + 2 40 3 ) )"
testString3 = "( let x ( * 11 11 ) ( * x x x ) )"

def product(operands):
    p = 1
    for oprand in operands:
        if type(oprand) != int:
            oprand = evaluate(oprand)
        p *= oprand
    return p
def ssum(operands):
    s = 0
    for oprand in operands:
        if type(oprand) != int:
            oprand = evaluate(oprand)
        s += oprand
    return sum(operands)

def let(var, varExpression, expression):
    varValue = evaluate(varExpression)
    subbedExpression =[]
    for token in expression:
        if token == var:
            subbedExpression.append(varValue)
        else:
            subbedExpression.append(token)
    return evaluate(subbedExpression)

def parse(string):
    string= string[2:-1]
    tokens = []
    token = ""
    i = 0
    while (i < len(string)):
        c = string[i]
        if c == " ":
            if token == "(":
                for j  in range(i+1, len(string)):
                    c2 = string[j]
                    if c2 == ")":
                        break
                token = parse(string[i-1:j+1])
                i = j+1
            elif token.isdigit():
                token = int(token)
            tokens.append(token)
            token = ""
        else:
            token +=c
        i+=1
    return tokens
def evaluate(tokens):
    print(tokens)
    op = tokens[0]
    print(op == "let")
    #assert token is *, +, or let
    if op == "*":
        return product(tokens[1:])
    if op == "+":
        return ssum(tokens[1:])
    if op == "let":
        
        return let(tokens[1], tokens[2], tokens[3]) #assert len token is 4
    return "failed"
    
def solve(string):
    return evaluate(parse(string))


print(testString,"=" solve(testString))
print(testString2,"=",solve(testString2))
print(testString3,"=",solve(testString3))
