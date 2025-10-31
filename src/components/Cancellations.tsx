import { useState } from 'react';
import { useCancellations } from '../hooks/useCancellations';
import { Button } from './Button';
import './Cancellations.css';

export const Cancellations = () => {
  const [stationInput, setStationInput] = useState('');
  const { cancellations, loading, error, fetchCancellations } =
    useCancellations();

  const handleFetch = () => {
    fetchCancellations(stationInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFetch();
    }
  };

  const formatTime = (isoString?: string) => {
    if (!isoString) return 'N/A';
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="cancellations-container">
      <div className="cancellations-card">
        <h1 className="cancellations-title">Train Cancellations</h1>

        <div className="cancellations-search">
          <div className="input-wrapper">
            <input
              type="text"
              className="station-input"
              placeholder="Enter station name (e.g., Stockholm Central)"
              value={stationInput}
              onChange={(e) => setStationInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
          </div>
          <Button
            onClick={handleFetch}
            variant="primary"
            size="md"
            disabled={loading || !stationInput.trim()}
          >
            {loading ? 'Loading...' : 'Fetch Cancellations'}
          </Button>
        </div>

        {error && (
          <div className="error-message">
            <div className="error-icon">⚠️</div>
            <span>{error}</span>
          </div>
        )}

        {!loading && !error && cancellations.length === 0 && stationInput && (
          <div className="info-message">
            <div className="info-icon">ℹ️</div>
            <span>No cancellations found for this station.</span>
          </div>
        )}

        {cancellations.length > 0 && (
          <div className="cancellations-results">
            <div className="results-header">
              <h2>Cancelled Trains</h2>
              <span className="results-count">
                {cancellations.length} cancellation
                {cancellations.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="cancellations-list">
              {cancellations.map((cancellation, index) => (
                <div key={index} className="cancellation-item">
                  <div className="cancellation-header">
                    <div className="train-info">
                      <span className="train-id">
                        {cancellation.advertisedTrainIdent || 'Unknown Train'}
                      </span>
                      <span className="train-route">
                        {cancellation.fromName || 'Unknown'} →{' '}
                        {cancellation.toName || 'Unknown'}
                      </span>
                      <span className="train-operator">
                        {cancellation.operator || 'Unknown Operator'}
                      </span>
                    </div>
                    <span className="cancellation-badge">Cancelled</span>
                  </div>

                  <div className="cancellation-details">
                    <div className="detail-row">
                      <span className="detail-label">Scheduled Time:</span>
                      <span className="detail-value">
                        {formatTime(cancellation.advertisedTimeAtLocation)}
                      </span>
                    </div>

                    {cancellation.viaToLocation &&
                      cancellation.viaToLocation.length > 0 && (
                        <div className="detail-row">
                          <span className="detail-label">Stops via:</span>
                          <span className="detail-value via-stations">
                            {cancellation.viaToLocation
                              .map((l) => l.locationName)
                              .join(' → ')}
                          </span>
                        </div>
                      )}

                    {cancellation.deviation?.description && (
                      <div className="detail-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value deviation-text">
                          {cancellation.deviation.description}
                        </span>
                      </div>
                    )}

                    {cancellation.otherInformation &&
                      cancellation.otherInformation.length > 0 && (
                        <div className="detail-row">
                          <span className="detail-label">Additional Info:</span>
                          <span className="detail-value">
                            {cancellation.otherInformation
                              .map((i) => i.description)
                              .join(' • ')}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <span>Fetching cancellations...</span>
          </div>
        )}
      </div>
    </div>
  );
};
