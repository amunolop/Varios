<div class="scoreHead">
  <span class="t">&gt; Score de Alertado:</span>
  <span class="line" aria-hidden="true"></span>
</div>

<div class="scoreWrap">
  <table class="scoreTable" aria-label="Score de alertado">
    <thead>
      <tr><th>Score</th><th>Grupo</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ scoreRange }}</td>
        <td>
          <select [(ngModel)]="grupo" aria-label="Grupo">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>

  <button type="button" class="saveIcon" (click)="requestSave()" aria-label="Guardar" title="Guardar"></button>
</div>

<div class="scoreNote">
  <span class="dot">•</span>
  <span>Se guardará el score por grupo 1 a 1</span>
</div>