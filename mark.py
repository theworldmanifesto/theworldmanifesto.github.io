import os

folder_path = 'lang/lang_texts'

for filename in os.listdir(folder_path):
    if filename.endswith('.txt') and filename != 'en_SPECIAL.txt':
        file_path = os.path.join(folder_path, filename)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        # Ta bort gamla markörer om de finns kvar sedan förra körningen
        lines = [line for line in lines if line.strip() not in ['--- START TABLE ---', '--- END TABLE ---']]

        new_lines = []
        in_table = False
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Identifiera starten: Hitta raden ovanför 25% (vilket är rubrikraderna)
            # Vi kollar om någon av de kommande 4 raderna innehåller "25 %" eller "25%"
            lookahead = ''.join(lines[i:i+4])
            if ('25 %' in lookahead or '25%' in lookahead) and not in_table:
                new_lines.append('--- START TABLE ---\n')
                in_table = True
            
            new_lines.append(line)
            
            # Identifiera slutet: När vi passerat "100 %", läs med stycket och stäng tabellen
            if in_table and ('100 %' in line or '100%' in line):
                while i + 1 < len(lines) and lines[i+1].strip() != '':
                    i += 1
                    new_lines.append(lines[i])
                
                new_lines.append('--- END TABLE ---\n')
                in_table = False
                
            i += 1

        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

print("Uppdaterat! Markörerna har flyttats så att rubrikerna hamnar i tabellen.")